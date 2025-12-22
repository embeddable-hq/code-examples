import { defineConfig } from '@embeddable.com/sdk-core';
import react from '@embeddable.com/sdk-react';

export default defineConfig({
  plugins: [react],
  modelsSrc: './src/models',
  presetsSrc: './src/presets',
  region: import.meta.env.PUBLIC_REGION,
});
