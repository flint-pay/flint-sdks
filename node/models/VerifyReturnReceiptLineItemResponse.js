import { d77 as c0, d1823 as c1, d1822 as c2, d2157 as c3, d2158 as c4, d2163 as c5, d2165 as c6, d2240 as c7, d2241 as c8, d2175 as c9, d2242 as c10, d14 as c11, d1821 as c12, d2176 as c13, d2520 as c14 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2520 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2520;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["ReturnActor"]:c5(),["ReturnDisposition"]:c6(),["ReturnReceipt"]:c7(),["ReturnReceiptLineItem"]:c8(),["ReturnSourceSystem"]:c9(),["ReturnUnverifiedItem"]:c10(),["SharedCodec1"]:c11(),["SharedCodec487"]:c12(),["SharedCodec547"]:c13(),["VerifyReturnReceiptLineItemResponse"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVerifyReturnReceiptLineItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
