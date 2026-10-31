import {
  getSite,
} from './site.js';

export const APP_VERSION = '8.394';
console.log(`${getSite().brand.name} ${APP_VERSION}`);
