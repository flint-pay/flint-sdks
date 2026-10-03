import { d74 as c0, d1784 as c1, d1783 as c2, d1946 as c3, d1948 as c4, d1949 as c5, d2118 as c6, d2119 as c7 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1949 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1949;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PaymentMethodDomain"]:c3(),["PaymentMethodDomainPaymentOption"]:c4(),["PaymentMethodDomainResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethodDomainResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
