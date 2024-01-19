import { OperationVariables } from '@apollo/client';
import { DocumentNode } from 'graphql';
import { httpClient } from './apollo-client';

export interface MutateDataParams {
  mutation: DocumentNode;
  variables?: Record<string, unknown>;
  successMessage?: string;
}

export interface HttpClientAdapterParams {
  query: DocumentNode;
  variables?: OperationVariables;
  dataKey?: string;
}

export class HttpClientAdapter {
  static async query<T>(params: HttpClientAdapterParams): Promise<T> {
    const response = await httpClient.query({
      query: params.query,
      variables: params.variables,
    });
    console.log('HttpClientAdapter: ', response);

    return params.dataKey ? response.data[`${params.dataKey}`] : response.data;
  }

  static async mutate<T>({
    mutation,
    variables,
  }: {
    mutation: DocumentNode;
    variables?: OperationVariables;
  }): Promise<T> {
    console.log('HttpClientAdapter mutate variables: ', variables);

    const response = await httpClient.mutate<T>({
      mutation,
      variables,
    });
    const { data } = response;
    if (!data) {
      throw new Error('Not Found');
    } else {
      console.log({ data });
      return data;
    }
  }
}
