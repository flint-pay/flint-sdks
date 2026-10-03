import { d910 as c0, d909 as c1, d515 as c2, d908 as c3, d2497 as c4 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d910 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d910;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook04494e8bd1b3Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["Webhook_dispute_prevented_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook04494e8bd1b3Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
