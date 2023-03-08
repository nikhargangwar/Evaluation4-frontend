import axios from 'axios';
import { ERROR_ROUTE } from '../../constants/routesPaths';

const makeRequest = async ({ url, method }, dynamicConfig, navigate) => {
  try {
    const response = await axios({
      url,
      method,
      ...dynamicConfig,
    });
    return response.data;
  } catch (e) {
    if (navigate) {
      const errorStatus = e.response?.status;

      if (errorStatus) {
        navigate(`${ERROR_ROUTE}/${errorStatus}`);
      } else {
        navigate(ERROR_ROUTE);
      }
    }
    return {};
  }
};

export default makeRequest;
