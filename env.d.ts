declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PG_USER: string;
      PG_PASS: string;
      PG_PORT: string;
      PG_DATABASE: string;
      PG_HOST: string;
    }
  }
}

export { };
