import { d893 as c0, d323 as c1, d490 as c2, d892 as c3, d1223 as c4, d1228 as c5 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1228 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1228;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["MoneyValue"]:c1(),["SharedCodec170"]:c2(),["SharedCodec246"]:c3(),["SharedCodec326"]:c4(),["Webhook_invoice_late_fee_assessed_merchant"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_late_fee_assessed_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
