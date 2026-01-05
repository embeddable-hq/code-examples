import { defineConfig } from '@embeddable.com/sdk-core';

export default defineConfig({
  plugins: [],
  modelsSrc: './src/models',
  presetsSrc: './src/presets',
  
  pushModels: true,
  pushComponents: false

  // 
  // Uncomment for US deployments
  //
  // region: 'US'
  
  //
  // Uncomment for EU deployments
  //
  // region: 'EU'

  //
  // For internal use only
  //
  // previewBaseUrl: 'https://app.dev.embeddable.com',
  // pushBaseUrl: 'https://api.dev.embeddable.com',
  // audienceUrl: 'https://api.dev.embeddable.com/',
  // authDomain: 'embeddable-dev.eu.auth0.com',
  // authClientId: 'xOKco5ztFCpWn54bJbFkAcT8mV4LLcpG',
});
