import { ApolloServer } from '@apollo/server';
import { All, Controller, Req, Res } from '@nestjs/common';
import {
  FormidableFile,
  Raw,
  Request,
  Response,
  executeHTTPGraphQLRequest,
} from '@node-libraries/nest-apollo-server';


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.start();

@Controller('/graphql')
export class GraphqlController {
  @All()
  async graphql(@Req() req: Request, @Res() res: Response) {
    await executeHTTPGraphQLRequest({
      req,
      res,
      apolloServer,
      context: async () => ({ req: Raw(req), res: Raw(res) }),
      options: {
        //Maximum upload file size set at 10 MB
        maxFileSize: 10 * 1024 * 1024,
      },
    });
  }
}