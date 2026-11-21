import { verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from './runtime.js';
export { parseExact } from './runtime.js';

import { DescriptorSource } from './descriptor-source.js';
import settings from './descriptors/settings.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import webhook from './descriptors/webhook.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
const _sdkDescriptors = new DescriptorSource(settings, {}, webhook);

export function verifyWebhook(rawBody, headers, secrets, nowSeconds) { return verifyWebhookFromPlan(_sdkDescriptors, rawBody, headers, secrets, nowSeconds); }
export function verifyWebhookAsync(rawBody, headers, options) { return verifyWebhookAsyncFromPlan(_sdkDescriptors, rawBody, headers, options); }
