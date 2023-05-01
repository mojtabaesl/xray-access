import * as dotenv from 'dotenv';
dotenv.config();

export interface Configs {
  delay: number;
  xrayLogFilePath: string;
  autoTrunc: boolean;
  getUserDevicesFromEmail: boolean;
  userDevices?: number;
  botToken: string | undefined;
}

const {
  DELAY,
  XRAY_LOG_FILE_PATH,
  AUTO_TRUNC,
  GET_USER_DEVICES_FROM_EMAIL,
  USER_DEVICES,
  BOT_TOKEN,
} = process.env;

export const configs: Configs = {
  delay: Number(DELAY) ?? 5000,
  xrayLogFilePath: XRAY_LOG_FILE_PATH ?? './access.log',
  autoTrunc: Boolean(AUTO_TRUNC) ?? false,
  getUserDevicesFromEmail: Boolean(GET_USER_DEVICES_FROM_EMAIL) ?? false,
  userDevices: Number(USER_DEVICES) ?? 2,
  botToken: BOT_TOKEN,
};
