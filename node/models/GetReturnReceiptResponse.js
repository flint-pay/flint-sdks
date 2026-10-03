import { d854 as c0, d74 as c1, d1784 as c2, d1783 as c3, d2118 as c4, d2119 as c5, d2124 as c6, d2126 as c7, d2201 as c8, d2202 as c9, d2136 as c10, d2203 as c11, d2137 as c12, d2479 as c13 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d854 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d854;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnReceiptResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnReceipt"]:c8(),["ReturnReceiptLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["ReturnUnverifiedItem"]:c11(),["SharedCodec534"]:c12(),["VerifyReturnReceiptLineItemResponse"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnReceiptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
