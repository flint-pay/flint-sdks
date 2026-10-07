import { d90 as c0, d77 as c1, d1824 as c2, d1823 as c3, d1986 as c4, d1991 as c5, d2158 as c6, d2159 as c7, d14 as c8, d91 as c9, d1822 as c10, d1985 as c11 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1991 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1991;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedCustomerSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["PaymentMethod"]:c4(),["PaymentMethodListResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec22"]:c9(),["SharedCodec488"]:c10(),["SharedCodec518"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentMethodListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
