import { d917 as c0, d916 as c1, d920 as c2, d936 as c3, d937 as c4, d941 as c5, d1364 as c6, d1367 as c7, d1368 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1368 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1368;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec282"]:c2(),["SharedCodec289"]:c3(),["SharedCodec290"]:c4(),["SharedCodec294"]:c5(),["SharedCodec381"]:c6(),["SharedCodec382"]:c7(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_updated_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
