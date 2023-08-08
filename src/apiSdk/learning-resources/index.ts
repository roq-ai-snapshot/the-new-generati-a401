import axios from 'axios';
import queryString from 'query-string';
import { LearningResourceInterface, LearningResourceGetQueryInterface } from 'interfaces/learning-resource';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLearningResources = async (
  query?: LearningResourceGetQueryInterface,
): Promise<PaginatedInterface<LearningResourceInterface>> => {
  const response = await axios.get('/api/learning-resources', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLearningResource = async (learningResource: LearningResourceInterface) => {
  const response = await axios.post('/api/learning-resources', learningResource);
  return response.data;
};

export const updateLearningResourceById = async (id: string, learningResource: LearningResourceInterface) => {
  const response = await axios.put(`/api/learning-resources/${id}`, learningResource);
  return response.data;
};

export const getLearningResourceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/learning-resources/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLearningResourceById = async (id: string) => {
  const response = await axios.delete(`/api/learning-resources/${id}`);
  return response.data;
};
