import { d1128 as c0, d909 as c1, d515 as c2, d908 as c3, d911 as c4, d1127 as c5, d2518 as c6 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1128 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1128;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook54f564ce918cPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["SharedCodec278"]:c4(),["SharedCodec332"]:c5(),["Webhook_merchant_billing_balance_updated_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook54f564ce918cPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
