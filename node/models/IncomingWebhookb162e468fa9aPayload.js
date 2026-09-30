import { d1238 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d826 as c6, d838 as c7, d839 as c8, d843 as c9, d1234 as c10, d1233 as c11, d1236 as c12, d1237 as c13, d1235 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1238 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1238;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookb162e468fa9aPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec257"]:c7(),["SharedCodec258"]:c8(),["SharedCodec262"]:c9(),["SharedCodec339"]:c10(),["SharedCodec340"]:c11(),["SharedCodec341"]:c12(),["Webhook_order_fulfillment_shipment_updated_installed_merchants"]:c13(),["Webhook_order_fulfillment_shipment_updated_merchant"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookb162e468fa9aPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
