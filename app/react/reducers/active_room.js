import { SET_ACTIVE_ROOM } from '../consts/index';

export default (state = null, action) => {
  switch(action.type) {
    case SET_ACTIVE_ROOM:
      state = Number(action.payload);
  }

  return state;
}
