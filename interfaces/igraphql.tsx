export interface IGraphQL {
  count: number;
  nextOffset: number;
  prevOffset: number;
  params: IParam;
  status: boolean;
  message: string;
}

interface IParam {
  limit: number;
  offset: number;
}
