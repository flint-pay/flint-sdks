import { d1167 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d826 as c6, d838 as c7, d839 as c8, d842 as c9, d840 as c10, d841 as c11, d843 as c12, d1163 as c13, d1162 as c14, d1165 as c15, d1166 as c16, d1164 as c17 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1167 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1167;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook96e4efc9dab0Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec251"]:c6(),["SharedCodec257"]:c7(),["SharedCodec258"]:c8(),["SharedCodec259"]:c9(),["SharedCodec260"]:c10(),["SharedCodec261"]:c11(),["SharedCodec262"]:c12(),["SharedCodec319"]:c13(),["SharedCodec320"]:c14(),["SharedCodec321"]:c15(),["Webhook_order_fulfillment_package_updated_installed_merchants"]:c16(),["Webhook_order_fulfillment_package_updated_merchant"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook96e4efc9dab0Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
