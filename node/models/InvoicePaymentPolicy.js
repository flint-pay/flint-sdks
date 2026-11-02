import { d4759 as c0, d4760 as c1 } from '../descriptors/data/208.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c2 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4760 as d4760 } from '../descriptors/data/208.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4760;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentOptionLimit"]:c0(),["InvoicePaymentPolicy"]:c1(),["MoneyValue"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoicePaymentPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
