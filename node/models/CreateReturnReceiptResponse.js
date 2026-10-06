import { d488 as c0, d77 as c1, d1823 as c2, d1822 as c3, d2157 as c4, d2158 as c5, d2163 as c6, d2165 as c7, d2240 as c8, d2241 as c9, d2175 as c10, d2242 as c11, d14 as c12, d1821 as c13, d2176 as c14, d2520 as c15 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d488 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d488;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnReceipt"]:c8(),["ReturnReceiptLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["ReturnUnverifiedItem"]:c11(),["SharedCodec1"]:c12(),["SharedCodec487"]:c13(),["SharedCodec547"]:c14(),["VerifyReturnReceiptLineItemResponse"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
