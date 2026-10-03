import { d1072 as c0, d909 as c1, d515 as c2, d908 as c3, d2491 as c4 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1072 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1072;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook39300cef9ff7Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["Webhook_balance_updated_merchant"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook39300cef9ff7Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
