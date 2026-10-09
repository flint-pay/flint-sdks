import { d1691 as c0, d323 as c1 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1691 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceManualPaymentRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceManualPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
