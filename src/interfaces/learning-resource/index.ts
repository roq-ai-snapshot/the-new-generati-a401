import { GetQueryInterface } from 'interfaces';

export interface LearningResourceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  name: string;

  _count?: {};
}

export interface LearningResourceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
