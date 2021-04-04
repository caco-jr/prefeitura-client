import { parseCookies } from 'nookies';

export const getToken = (): string => parseCookies().token;
