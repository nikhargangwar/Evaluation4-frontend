export const BACKEND_URL = 'http://localhost:4000/api';
export const AUTH_URL = 'http://localhost:3000';

export const GET_ALL_TYPES = {
  url: `${BACKEND_URL}/type`,
  method: 'GET',
};

export const CREATE_TYPE = {
  url: `${BACKEND_URL}/type`,
  method: 'POST',
};

export const GET_FIELDS_BY_ID = {
  url: `${BACKEND_URL}/field`,
  method: 'POST',
};

export const ADD_FIELD = {
  url: `${BACKEND_URL}/field/post`,
  method: 'POST',
};

// export const GET_ALL_EVENTS = () => ({
//   url: `${BACKEND_URL}/api/events`,
//   method: 'GET',
// });

// export const GET_EVENT_BY_ID = (id) => ({
//   url: `${BACKEND_URL}/api/events/${id}`,
//   method: 'GET',
// });

// export const UPDATE_BOOKMARK = (id) => ({
//   url: `${BACKEND_URL}/api/events/${id}`,
//   method: 'PATCH',
// });

// export const UPDATE_REGISTRATION = (id) => ({
//   url: `${BACKEND_URL}/api/events/${id}`,
//   method: 'PATCH',
// });

// export const GET_ALL_THEMES = () => ({
//   url: `${BACKEND_URL}/api/themes`,
//   method: 'GET',
// });

// export const SAVE_THEME = () => ({
//   url: `${BACKEND_URL}/api/events/`,
//   method: 'PUT',
// });
