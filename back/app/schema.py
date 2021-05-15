import graphene

import user.schema


class Query(user.schema.Query,
            graphene.ObjectType):
    pass


class Mutation(user.schema.Mutations,
               graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
