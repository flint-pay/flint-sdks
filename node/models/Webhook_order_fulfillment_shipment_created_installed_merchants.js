import { d901 as c0, d900 as c1, d920 as c2, d921 as c3, d925 as c4, d1160 as c5, d1161 as c6 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1161 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1161;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec251"]:c1(),["SharedCodec260"]:c2(),["SharedCodec261"]:c3(),["SharedCodec265"]:c4(),["SharedCodec315"]:c5(),["Webhook_order_fulfillment_shipment_created_installed_merchants"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_created_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
