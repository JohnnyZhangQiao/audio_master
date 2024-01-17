/// <reference types="vite/client" />

declare const ENV: {
  TARGET_URL: string;
  NODE_ENV: 'test' | 'production' | 'local';
};
