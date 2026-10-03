import { d917 as c0, d916 as c1, d936 as c2, d937 as c3, d941 as c4, d1158 as c5, d1159 as c6 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1159 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec289"]:c2(),["SharedCodec290"]:c3(),["SharedCodec294"]:c4(),["SharedCodec338"]:c5(),["Webhook_order_fulfillment_shipment_created_installed_merchants"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
