import { d893 as c0, d490 as c1, d892 as c2, d920 as c3, d921 as c4, d925 as c5, d1158 as c6, d1159 as c7 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1159 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec260"]:c3(),["SharedCodec261"]:c4(),["SharedCodec265"]:c5(),["SharedCodec314"]:c6(),["Webhook_order_fulfillment_shipment_created_merchant"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_shipment_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
