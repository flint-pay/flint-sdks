import { d323 as c0, d1820 as c1, d1821 as c2, d1990 as c3, d1991 as c4, d1992 as c5, d2162 as c6, d2163 as c7, d14 as c8, d1819 as c9 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1991 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1991;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PaymentMethodDomain"]:c3(),["PaymentMethodDomainListResponse"]:c4(),["PaymentMethodDomainPaymentOption"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec466"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethodDomainListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
