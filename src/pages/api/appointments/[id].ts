import { NextApiRequest, NextApiResponse } from 'next';
import httpProxyMiddleware from 'next-http-proxy-middleware';

import { API_EXTERNAL_URL } from '@utils/url';

export default (req: NextApiRequest, res: NextApiResponse): Promise<any> =>
  httpProxyMiddleware(req, res, {
    target: API_EXTERNAL_URL,
    pathRewrite: {
      '^/api': '',
    },
  });
