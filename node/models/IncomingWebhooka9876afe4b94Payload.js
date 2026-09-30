import { d1210 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d932 as c6, d934 as c7, d1209 as c8, d1208 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1210 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhooka9876afe4b94Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec281"]:c6(),["SharedCodec282"]:c7(),["Webhook_refund_created_installed_merchants"]:c8(),["Webhook_refund_created_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhooka9876afe4b94Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
