import Actions from '../Actions';

const FORM_HANDLER = (state, action) => {
  const validationkeys = Object.keys(state.validation);
  const correctValidationObject = {};

  validationkeys.forEach((key) => {
    correctValidationObject[key] = 'success';
  });

  switch (action.type) {
    case Actions.ON_CHANGE: return {
      ...state,
      data: {
        ...state.data,
        [action.name]: action.value,
      },
      validation: {
        ...state.validation,
        [action.name]: !action.value ? 'invalid' : 'success',
      },
    };
    case Actions.RECEIVE_DATA: return {
      ...state,
      data: {
        ...action.value,
      },
      validation: {
        ...correctValidationObject,
      },
    };
    case Actions.BUTTON_STATUS: return {
      ...state,
      disabled: action.value,
    };
    case Actions.SUBMIT: return {
      ...state,
      formFeedback: action.value,
    };
    default: return state;
  }
};
export default FORM_HANDLER;
