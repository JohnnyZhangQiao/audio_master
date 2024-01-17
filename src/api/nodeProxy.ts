const testServer = 'test.com';
const productionServer = 'production.com';
const localServer = 'localhost';

export function fetchEnv(env: string | boolean | undefined) {
  switch (env) {
    case 'local':
      return { targetUrl: localServer };
    case 'test':
      return { targetUrl: testServer };
    case 'production':
      return { targetUrl: productionServer };
    default:
      return { targetUrl: '' };
  }
}