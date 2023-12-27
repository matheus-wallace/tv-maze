import { ShowModel } from '../../common/models/show.model';
import client from '../api';
import { FetchShowParams } from './types';

export const fetchShow = async ({ page }: FetchShowParams) => {
  const { data } = await client.get<Array<ShowModel>>('/shows', {
    params: { page },
  });
  return data;
};
