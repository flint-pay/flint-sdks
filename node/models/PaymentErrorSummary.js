import { d789 as c0, d1823 as c1, d1822 as c2, d863 as c3, d14 as c4, d1821 as c5 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d863 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d863;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorRemediation"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PaymentErrorSummary"]:c3(),["SharedCodec1"]:c4(),["SharedCodec487"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentErrorSummary(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
