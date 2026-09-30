import { d848 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d844 as c6, d838 as c7, d839 as c8, d842 as c9, d840 as c10, d841 as c11, d843 as c12, d846 as c13, d847 as c14, d845 as c15 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d848 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d848;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook0b04bd9d63dbPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec256"]:c6(),["SharedCodec257"]:c7(),["SharedCodec258"]:c8(),["SharedCodec259"]:c9(),["SharedCodec260"]:c10(),["SharedCodec261"]:c11(),["SharedCodec262"]:c12(),["SharedCodec263"]:c13(),["Webhook_order_fulfillment_package_created_installed_merchants"]:c14(),["Webhook_order_fulfillment_package_created_merchant"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook0b04bd9d63dbPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
