import produce from 'immer';

const INITIAL_STATE = {
  data: [],
};

export default function restaurants(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@restaurants/ADD':
        draft.data = action.payload;
        break;

      default:
        return state;
    }
  });
}
