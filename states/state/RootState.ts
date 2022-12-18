import store from '../store/Store';

export type RootState = ReturnType<typeof store.getState>;
