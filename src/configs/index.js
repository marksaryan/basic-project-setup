module.exports = {
  apiConfig: {
    api_endpoint: 'http://localhost:8000/api/'
  },
  aws: {
    Auth: {
      identityPoolId: '',
      userPoolId: '',
      userPoolWebClientId: '',
      region: 'us-east-1',
      mandatorySignIn: false
    }
  }
};
