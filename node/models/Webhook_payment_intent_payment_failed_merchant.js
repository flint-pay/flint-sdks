import { d909 as c0, d515 as c1, d908 as c2, d913 as c3, d912 as c4, d911 as c5, d1389 as c6 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1389 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1389;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec276"]:c3(),["SharedCodec277"]:c4(),["SharedCodec278"]:c5(),["Webhook_payment_intent_payment_failed_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_payment_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
