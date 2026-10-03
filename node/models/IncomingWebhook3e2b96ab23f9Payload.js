import { d1090 as c0, d909 as c1, d515 as c2, d908 as c3, d2492 as c4 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1090 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1090;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook3e2b96ab23f9Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["Webhook_capability_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook3e2b96ab23f9Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
