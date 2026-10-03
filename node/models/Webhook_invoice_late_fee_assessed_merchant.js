import { d909 as c0, d74 as c1, d515 as c2, d908 as c3, d1213 as c4, d1218 as c5 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1218 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1218;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["MoneyValue"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["SharedCodec347"]:c4(),["Webhook_invoice_late_fee_assessed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_assessed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
