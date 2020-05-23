import {Reducer} from 'redux';

export interface IHomeState {
  data: string[];
  v: string;
  // 验证码
  verCode: string;
}

export interface IHomeModelType {
  namespace: 'home';
  state: IHomeState;
  effects: {};
  reducers: {
    save: Reducer<IHomeState>;
  };
}

const home: IHomeModelType = {
  namespace: 'home',
  state: {
    data: [],
    v: '1.0',
    verCode: '',
  },
  effects: {},

  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
};

export default home;