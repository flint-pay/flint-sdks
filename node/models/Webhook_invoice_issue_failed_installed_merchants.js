import { d901 as c0, d895 as c1, d900 as c2, d1398 as c3, d1399 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1399 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1399;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec249"]:c1(),["SharedCodec251"]:c2(),["SharedCodec366"]:c3(),["Webhook_invoice_issue_failed_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_issue_failed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
