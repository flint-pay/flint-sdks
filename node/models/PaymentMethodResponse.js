import { d90 as c0, d77 as c1, d1823 as c2, d1822 as c3, d1985 as c4, d1991 as c5, d2157 as c6, d2158 as c7, d14 as c8, d91 as c9, d1821 as c10, d1984 as c11 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1991 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1991;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentMethod"]:c4(),["PaymentMethodResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec22"]:c9(),["SharedCodec487"]:c10(),["SharedCodec517"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethodResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
