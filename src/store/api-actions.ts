import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { loadCities, setDataLoadedStatus, } from './action';
import {offerType} from '../types/types';

export const fetchCitiesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchQuests',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    try{
      const {data} = await api.get<offerType[]>('/quests');
      dispatch(loadCities(data));
    }
    finally{
      dispatch(setDataLoadedStatus(false));
    }
  },
);

// export const createCommentAction = createAsyncThunk<void, CommentData, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'user/login',
//   async ({offerNumber, comment: string, rating: number}, {dispatch, extra: api}) => {
//     const {data} = await api.post<commentType[]>(`/comments/${offerNumber}`, {comment: string, rating: number});
//     dispatch(loadComments(data));
//   },
// );
