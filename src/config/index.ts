import * as dotenv from 'dotenv'

dotenv.config()

// Interface
interface IConfig {
  port: number
}

const nodeEnv: string = process.env.NODE_ENV as string

const devConfig: IConfig = {
  port: parseInt(process.env.PORT as string, 10) || 3000
}
const prodConfig: IConfig = {
  port: parseInt(process.env.PORT as string, 10) || 3000
}
export const Config: IConfig = nodeEnv === 'production' ? prodConfig : devConfig
