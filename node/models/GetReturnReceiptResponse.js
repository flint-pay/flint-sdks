import { d821 as c0, d314 as c1, d1775 as c2, d1776 as c3, d2112 as c4, d2113 as c5, d2118 as c6, d2120 as c7, d2195 as c8, d2196 as c9, d2130 as c10, d2225 as c11, d14 as c12, d1774 as c13, d2131 as c14, d2472 as c15 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d821 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d821;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnReceiptResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnReceipt"]:c8(),["ReturnReceiptLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["ReturnUnverifiedItem"]:c11(),["SharedCodec1"]:c12(),["SharedCodec448"]:c13(),["SharedCodec504"]:c14(),["VerifyReturnReceiptLineItemResponse"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnReceiptResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
