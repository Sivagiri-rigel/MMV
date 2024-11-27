import axios from 'axios';
import Config from '../../config';
//PATH VARIABLE REPLACER
function bindPath(url, pathVal) {
  var newUrl = url;
  var pathExpression = /:[a-z0-9]+/gi;
  var pathVar;
  while (((pathVar = pathExpression.exec(url)), pathVar != null)) {
    let pathVarName = pathVar[0];
    newUrl = newUrl.replace(pathVarName, pathVal[pathVarName.substring(1, pathVarName.length)]);
  }
  return newUrl;
}
export default {
  setupInterceptors: (store) => {
    axios.interceptors.request.use(
      function (config) {
        if (config.headers.isAuthRequired) {
          const token = store.getState().authentication.authDetails.bearer; //GET TOKEN FROM REDUX STATE
          if (token) config.headers.Authorization = `${token}`; //ADD AUTHORIZATION HEADER
        }
        //PATH VARIABLES IS AVAILABLE
        if (config.headers.path) {
          try {
            config.url = bindPath(config.url, config.headers.path);
          } catch (e) {
            console.log('ERROR OCCURED WHEN REPLACING PATH VARIABLES', e);
          }
        }
        config.baseURL = Config.API_URL;
        // delete config.headers?.isPhp;
        // delete config.headers?.isJava;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (
          !axios.isCancel(error) &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // navigation.navigate('sessionexpire');
          // store.dispatch(resetData());
          // store.dispatch(
          //   showSnackbar({
          //     showSnackbar: true,
          //     msg: 'Session expired please enter your pin!',
          //     variant: 'error',
          //   })
          // )
        }
        return Promise.reject(error);
      }
    );
  },
};
