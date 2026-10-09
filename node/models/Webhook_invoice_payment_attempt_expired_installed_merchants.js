import { d901 as c0, d895 as c1, d900 as c2, d1242 as c3, d1243 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1243 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1243;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec249"]:c1(),["SharedCodec251"]:c2(),["SharedCodec329"]:c3(),["Webhook_invoice_payment_attempt_expired_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_payment_attempt_expired_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
