import { d1172 as c0, d815 as c1, d823 as c2, d468 as c3, d814 as c4, d822 as c5, d1168 as c6, d1170 as c7, d1171 as c8, d1169 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1172 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1172;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook97e2715bf986Payload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["PartnerWebhookEnvelope"]:c2(),["SharedCodec176"]:c3(),["SharedCodec244"]:c4(),["SharedCodec249"]:c5(),["SharedCodec322"]:c6(),["SharedCodec323"]:c7(),["Webhook_customer_deletion_completed_installed_merchants"]:c8(),["Webhook_customer_deletion_completed_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook97e2715bf986Payload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
