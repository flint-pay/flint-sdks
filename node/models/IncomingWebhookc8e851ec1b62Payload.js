import { d1287 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d838 as c6, d839 as c7, d937 as c8, d939 as c9, d1286 as c10, d1285 as c11 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1287 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhookc8e851ec1b62Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec257"]:c6(),["SharedCodec258"]:c7(),["SharedCodec283"]:c8(),["SharedCodec284"]:c9(),["Webhook_order_fulfillment_completed_installed_merchants"]:c10(),["Webhook_order_fulfillment_completed_merchant"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhookc8e851ec1b62Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
