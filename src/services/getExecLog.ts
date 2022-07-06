import { api } from './api';

type GetOptionTypes = {
  status: number
  data: any
};

export const getExerciseLog = async (): Promise<GetOptionTypes> => {
  try {
    const response = await api.get(`/exercise/:id/log`);

    const data = response.data;

    return {
      status: data.status || 200,
      data: data
    }

  } catch (error: any) {
    return {
      status: error.response.status,
      data: []
    }
  }
}