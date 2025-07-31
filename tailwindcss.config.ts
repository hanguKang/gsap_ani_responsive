import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}', // 필요한 파일 확장자 적어주기
  ],
  theme: {
    extend: {
      // 테마 확장 가능
    },
  },
  plugins: [
    // 필요하면 Tailwind 플러그인 추가
  ],
};

export default config;