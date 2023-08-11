import axios from 'axios'
import { envVars } from './services/env.service'

export const http = axios.create({
  baseURL: envVars().baseApiUrl,
  headers: {
    'Content-type': 'application/json',
  },
})
