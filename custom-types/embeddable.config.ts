import { defineConfig } from '@embeddable.com/sdk-core';
import react from '@embeddable.com/sdk-react';

export default defineConfig({
  plugins: [react],

  /*
   * Uncomment for EU deployments
   */
  // region: 'EU',

  /*
   * Uncomment for US deployments
   */
  region: 'EU',
});
