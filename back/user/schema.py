import graphene
from graphene_django import DjangoObjectType

from .models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User


class Query(graphene.ObjectType):
    check_user = graphene.Field(UserType, email=graphene.String())
    user = graphene.Field(UserType, id=graphene.Int())
    users = graphene.List(UserType)

    def resolve_check_user(self, info, **kwargs):
        email = kwargs.get('email')
        return User.objects.get(email=email) 

    def resolve_user(self, info, **kwargs):
        id = kwargs.get('id')
        return User.objects.get(id=id)

    def resolve_users(self, info):
        return User.objects.all()


class UserMutation(graphene.Mutation):
    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        email = graphene.String(required=True)

    user = graphene.Field(UserType)

    @staticmethod
    def mutate(root, info, first_name, last_name, email):
        user = User.objects.create(first_name=first_name,
                                   last_name=last_name,
                                   email=email)
        user.save()
        return UserMutation(user=user)


class Mutations(graphene.ObjectType):
    user_create = UserMutation.Field()
