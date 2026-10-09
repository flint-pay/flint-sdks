import { d323 as c0, d1820 as c1, d1821 as c2, d2162 as c3, d2163 as c4, d2168 as c5, d2170 as c6, d2245 as c7, d2246 as c8, d2180 as c9, d2275 as c10, d14 as c11, d1819 as c12, d2181 as c13, d2562 as c14 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2562 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2562;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["ReturnActor"]:c5(),["ReturnDisposition"]:c6(),["ReturnReceipt"]:c7(),["ReturnReceiptLineItem"]:c8(),["ReturnSourceSystem"]:c9(),["ReturnUnverifiedItem"]:c10(),["SharedCodec1"]:c11(),["SharedCodec466"]:c12(),["SharedCodec524"]:c13(),["VerifyReturnReceiptLineItemResponse"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVerifyReturnReceiptLineItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
