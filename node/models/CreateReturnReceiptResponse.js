import { d442 as c0, d323 as c1, d1820 as c2, d1821 as c3, d2162 as c4, d2163 as c5, d2168 as c6, d2170 as c7, d2245 as c8, d2246 as c9, d2180 as c10, d2275 as c11, d14 as c12, d1819 as c13, d2181 as c14, d2562 as c15 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d442 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d442;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnReceipt"]:c8(),["ReturnReceiptLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["ReturnUnverifiedItem"]:c11(),["SharedCodec1"]:c12(),["SharedCodec466"]:c13(),["SharedCodec524"]:c14(),["VerifyReturnReceiptLineItemResponse"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
