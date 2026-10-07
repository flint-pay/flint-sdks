import { d77 as c0, d1824 as c1, d1823 as c2, d2158 as c3, d2159 as c4, d2164 as c5, d2166 as c6, d2241 as c7, d2242 as c8, d2176 as c9, d2243 as c10, d14 as c11, d1822 as c12, d2177 as c13, d2521 as c14 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2521 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2521;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["ReturnActor"]:c5(),["ReturnDisposition"]:c6(),["ReturnReceipt"]:c7(),["ReturnReceiptLineItem"]:c8(),["ReturnSourceSystem"]:c9(),["ReturnUnverifiedItem"]:c10(),["SharedCodec1"]:c11(),["SharedCodec488"]:c12(),["SharedCodec548"]:c13(),["VerifyReturnReceiptLineItemResponse"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVerifyReturnReceiptLineItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
