export type EnvironmentVariables = {
  environment: 'local' | 'dev' | 'test' | 'prod'
  baseAppUrl: string
  baseApiUrl: string
}

export const envVars = (): EnvironmentVariables => {
  const shortEnv = (process.env.NEXT_PUBLIC_ENV as 'local' | 'dev' | 'test' | 'prod') || 'local'

  const EnvironmentVars: EnvironmentVariables = {
    environment: process.env.NEXT_PUBLIC_ENV as 'local' | 'dev' | 'test' | 'prod',
    baseAppUrl: getBaseAppUrl(shortEnv),
    baseApiUrl: getBaseApiUrl(shortEnv),
  }
  return EnvironmentVars
}

const devAmplifyUrl = '' // replace with your dev url
const prodAmplifyUrl = '' // replace with your prod url

const getBaseApiUrl = (env?: string): string => {
  switch (env) {
    case 'dev':
      return `${devAmplifyUrl}/api`
    case 'prod':
      return `${prodAmplifyUrl}/api`
    default:
      return 'http://localhost:3000/api'
  }
}

const getBaseAppUrl = (env: string): string => {
  switch (env) {
    case 'dev':
      return devAmplifyUrl
    case 'prod':
      return prodAmplifyUrl
    default:
      return 'http://localhost:3000'
  }
}
