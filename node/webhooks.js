import { verifyWebhookFromPlan } from './runtime.js';
export { parseExact } from './runtime.js';

import { DescriptorSource } from './descriptor-source.js';
import settings from './descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import webhook from './descriptors/webhook.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
const _sdkDescriptors = new DescriptorSource(settings, {}, webhook);

export function verifyWebhook(rawBody, headers, secrets, nowSeconds) { return verifyWebhookFromPlan(_sdkDescriptors, rawBody, headers, secrets, nowSeconds); }
