const GET_GREETING = 'hello-react-front-end/greeting/GET_GREETINGS';

const initialState = '';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  };
};

export default greetingReducer;

export const getMessage = (payload) => ({
  type: GET_GREETING,
  payload,
});

export const getGreeting = () => async (dispatch) => {
  const response = await fetch('http://127.0.0.1:8000/v1/greeting');
  const data = await response.json();
  dispatch(getMessage(data.message));
};