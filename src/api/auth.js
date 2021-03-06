/* sketch when connecting to the service
import axios from 'axios';

const createRequest = async (url, method, data) => {
  const requestObject = {
    method,
    url: 'serviceUrl',
    params: {}, // check this
    data,
    headers: {
      'Content-type': 'application/json',
      Authorization: 'some key if available',
    },
    timeout: 15000,
  };
  try {
    const res = await axios.request(requestObject);
    return { status: res.status, data: res.data, headers: res.headers };
  } catch (err) {
    console.err('ERROR in http request: ', JSON.stringify(err));
    throw err;
  }
};

const get = (url) => createRequest(url, 'GET');
const post = (url, data) => createRequest(url, 'POST', data);
*/

import { mockedPost } from './mocks';
import { getConfig } from '../tempConfig';

const login = (email, password) => {
  // get url from a future config file
  const url = `${getConfig().SERVICE_URL}/login`;
  // return post(url, { email, password })
  // eslint-disable-next-line no-console
  console.log(`Mocked call to login with email=${email} and password=${password}`);
  return mockedPost(url, { email, password });
};

export {
  login,
};
