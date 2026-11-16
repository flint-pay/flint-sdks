import { verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from './runtime.js';
export { parseExact } from './runtime.js';

import { DescriptorSource } from './descriptor-source.js';
import settings from './descriptors/settings.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import webhook from './descriptors/webhook.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
const _sdkDescriptors = new DescriptorSource(settings, {}, webhook);

export function verifyWebhook(rawBody, headers, secrets, nowSeconds) { return verifyWebhookFromPlan(_sdkDescriptors, rawBody, headers, secrets, nowSeconds); }
export function verifyWebhookAsync(rawBody, headers, options) { return verifyWebhookAsyncFromPlan(_sdkDescriptors, rawBody, headers, options); }
