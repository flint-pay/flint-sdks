import { d1384 as c0, d909 as c1, d515 as c2, d908 as c3, d2499 as c4 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1384 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1384;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb887d4b2753cPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["Webhook_dispute_warning_closed_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb887d4b2753cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
