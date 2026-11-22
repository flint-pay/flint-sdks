import { verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from './runtime.js';
export { parseExact } from './runtime.js';

import { DescriptorSource } from './descriptor-source.js';
import settings from './descriptors/settings.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import webhook from './descriptors/webhook.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
const _sdkDescriptors = new DescriptorSource(settings, {}, webhook);

export function verifyWebhook(rawBody, headers, secrets, nowSeconds) { return verifyWebhookFromPlan(_sdkDescriptors, rawBody, headers, secrets, nowSeconds); }
export function verifyWebhookAsync(rawBody, headers, options) { return verifyWebhookAsyncFromPlan(_sdkDescriptors, rawBody, headers, options); }
