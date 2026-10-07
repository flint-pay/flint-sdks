import { d77 as c0, d1830 as c1, d1829 as c2, d1993 as c3, d1995 as c4, d1996 as c5, d2164 as c6, d2165 as c7, d14 as c8, d1828 as c9 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1996 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1996;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PaymentMethodDomain"]:c3(),["PaymentMethodDomainPaymentOption"]:c4(),["PaymentMethodDomainResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec492"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethodDomainResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
