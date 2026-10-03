import { d909 as c0, d515 as c1, d908 as c2, d936 as c3, d937 as c4, d941 as c5, d1156 as c6, d1157 as c7 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1157 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1157;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec197"]:c1(),["SharedCodec275"]:c2(),["SharedCodec289"]:c3(),["SharedCodec290"]:c4(),["SharedCodec294"]:c5(),["SharedCodec337"]:c6(),["Webhook_order_fulfillment_shipment_created_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
