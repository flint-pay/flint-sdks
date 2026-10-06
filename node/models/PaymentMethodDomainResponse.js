import { d77 as c0, d1823 as c1, d1822 as c2, d1986 as c3, d1988 as c4, d1989 as c5, d2157 as c6, d2158 as c7, d14 as c8, d1821 as c9 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1989 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1989;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PaymentMethodDomain"]:c3(),["PaymentMethodDomainPaymentOption"]:c4(),["PaymentMethodDomainResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec487"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethodDomainResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
