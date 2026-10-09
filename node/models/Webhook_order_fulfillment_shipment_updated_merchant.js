import { d893 as c0, d490 as c1, d892 as c2, d904 as c3, d920 as c4, d921 as c5, d925 as c6, d1382 as c7, d1381 as c8, d1383 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1383 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec253"]:c3(),["SharedCodec260"]:c4(),["SharedCodec261"]:c5(),["SharedCodec265"]:c6(),["SharedCodec360"]:c7(),["SharedCodec361"]:c8(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_updated_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
