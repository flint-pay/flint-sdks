import { d909 as c0, d515 as c1, d908 as c2, d913 as c3, d912 as c4, d911 as c5, d1210 as c6 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1210 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec276"]:c3(),["SharedCodec277"]:c4(),["SharedCodec278"]:c5(),["Webhook_payment_intent_succeeded_merchant"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_payment_intent_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
