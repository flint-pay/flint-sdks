import { d1361 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d920 as c6, d921 as c7, d1023 as c8, d1025 as c9, d1360 as c10, d1359 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1361 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1361;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooka9d01c88ec13Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec260"]:c6(),["SharedCodec261"]:c7(),["SharedCodec287"]:c8(),["SharedCodec288"]:c9(),["Webhook_order_fulfillment_created_installed_merchants"]:c10(),["Webhook_order_fulfillment_created_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooka9d01c88ec13Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
