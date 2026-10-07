import { d881 as c0, d77 as c1, d1830 as c2, d1829 as c3, d2164 as c4, d2165 as c5, d2170 as c6, d2172 as c7, d2247 as c8, d2248 as c9, d2182 as c10, d2249 as c11, d14 as c12, d1828 as c13, d2183 as c14, d2527 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d881 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d881;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnReceiptResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnReceipt"]:c8(),["ReturnReceiptLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["ReturnUnverifiedItem"]:c11(),["SharedCodec1"]:c12(),["SharedCodec492"]:c13(),["SharedCodec552"]:c14(),["VerifyReturnReceiptLineItemResponse"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnReceiptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
