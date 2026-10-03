import { d909 as c0, d515 as c1, d908 as c2, d936 as c3, d937 as c4, d1279 as c5, d1278 as c6, d1280 as c7 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1280 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1280;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec289"]:c3(),["SharedCodec290"]:c4(),["SharedCodec357"]:c5(),["SharedCodec358"]:c6(),["Webhook_order_fulfillment_status_changed_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_status_changed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
