/// <reference types="vite/client" />VITE_BASE_BASE_URL
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_FOOTER_TEXT: string;
  readonly VITE_LOCAL_USER_ID: string;
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_DATABASE_URL: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGE_SENDER_ID: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
