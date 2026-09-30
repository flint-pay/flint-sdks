import { d823 as c0, d817 as c1, d822 as c2, d1198 as c3, d1199 as c4 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1199 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1199;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec247"]:c1(),["SharedCodec249"]:c2(),["SharedCodec329"]:c3(),["Webhook_invoice_credited_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_credited_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
