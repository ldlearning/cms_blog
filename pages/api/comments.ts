// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {GraphQLClient, gql} from "graphql-request";

type Data = {
  name: string
}

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphQLToken = process.env.GRAPHCMS_TOKEN;

export default async function comments(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

  const graphQLClient = new GraphQLClient(graphQLAPI!, {
    headers: {
      authorization: `Bearer ${graphQLToken!}`
    }
  });

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  const result = await graphQLClient.request(query, req.body);

  res.status(200).send(result)
}
