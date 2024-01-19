export interface Config {
  title: string;
  footer: {
    text: string;
  };
  base: {
    webUrl: string;
    apiUrl: string;
  };
}

const defaultConfig: Config = {
  title: import.meta.env.VITE_APP_TITLE || 'Amaris Chalenge',
  footer: {
    text: import.meta.env.VITE_APP_FOOTER_TEXT || 'Amaris Chalenge',
  },
  base: {
    webUrl: import.meta.env.VITE_BASE_WEB_URL,
    apiUrl:
      import.meta.env.VITE_BASE_API_URL 
  },
};

export const config = defaultConfig as Config;
