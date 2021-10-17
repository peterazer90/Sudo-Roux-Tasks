const clientForm = {
  firstName: '',
  last_name: '',
  emailAddress: '',
  subscribed: '',
  dob: '',
};
/// ////////////////////////////////////////////////////////////////////////
const EXECUTE_INIT_STATE = (INIT_STATE) => ({
  data: { ...INIT_STATE },
  validation: { ...INIT_STATE },
  disabled: true,
  formFeedback: null,
});
/// ////////////////////////////////////////////////////////////////////////

export default {
  CLIENT_FORM: EXECUTE_INIT_STATE(clientForm),
};
