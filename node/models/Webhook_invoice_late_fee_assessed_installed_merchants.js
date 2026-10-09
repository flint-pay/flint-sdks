import { d323 as c0, d901 as c1, d900 as c2, d1225 as c3, d1229 as c4 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1229 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec251"]:c2(),["SharedCodec327"]:c3(),["Webhook_invoice_late_fee_assessed_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_assessed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
