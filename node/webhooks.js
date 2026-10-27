import { verifyWebhookFromPlan } from './runtime.js';
export { parseExact } from './runtime.js';

import { DescriptorSource } from './descriptor-source.js';
import settings from './descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import webhook from './descriptors/webhook.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
const _sdkDescriptors = new DescriptorSource(settings, {}, webhook);

export function verifyWebhook(rawBody, headers, secrets, nowSeconds) { return verifyWebhookFromPlan(_sdkDescriptors, rawBody, headers, secrets, nowSeconds); }
