const cognito = {
  mandatorySignIn: true,
  region: process.env.COGNITO_REGION,
  userPoolId: process.env.COGNITO_USER_POOL_ID,
  userPoolWebClientId: process.env.COGNITO_APP_CLIENT_ID,
}

export {
  cognito
}
