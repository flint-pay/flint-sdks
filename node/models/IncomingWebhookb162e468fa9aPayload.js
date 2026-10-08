import { d1386 as c0, d893 as c1, d901 as c2, d490 as c3, d892 as c4, d900 as c5, d904 as c6, d920 as c7, d921 as c8, d925 as c9, d1382 as c10, d1381 as c11, d1384 as c12, d1385 as c13, d1383 as c14 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1386 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1386;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb162e468fa9aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec170"]:c3(),["SharedCodec246"]:c4(),["SharedCodec251"]:c5(),["SharedCodec253"]:c6(),["SharedCodec260"]:c7(),["SharedCodec261"]:c8(),["SharedCodec265"]:c9(),["SharedCodec360"]:c10(),["SharedCodec361"]:c11(),["SharedCodec362"]:c12(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c13(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb162e468fa9aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
