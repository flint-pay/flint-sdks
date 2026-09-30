import { d936 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d932 as c6, d934 as c7, d935 as c8, d933 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d936 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d936;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook28eb66b9f1a5Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec281"]:c6(),["SharedCodec282"]:c7(),["Webhook_refund_updated_installed_merchants"]:c8(),["Webhook_refund_updated_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook28eb66b9f1a5Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
