import produce from 'immer';

const INITIAL_STATE = {
  isModalOpen: false,
  data: {
    image: '',
    name: '',
    price: '',
    description: '',
  },
};

export default function modal(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@modal/OPEN':
        draft.isModalOpen = true;
        draft.data = action.payload;
        break;

      case '@modal/CLOSE':
        draft.isModalOpen = false;
        break;

      default:
        return state;
    }
  });
}
