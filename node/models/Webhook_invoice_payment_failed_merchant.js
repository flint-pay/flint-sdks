import { d815 as c0, d468 as c1, d814 as c2, d817 as c3, d1223 as c4, d1224 as c5 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1224 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1224;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec176"]:c1(),["SharedCodec244"]:c2(),["SharedCodec247"]:c3(),["SharedCodec335"]:c4(),["Webhook_invoice_payment_failed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_payment_failed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
