import { d314 as c0, d1775 as c1, d1776 as c2, d2112 as c3, d2113 as c4, d2118 as c5, d2120 as c6, d2195 as c7, d2196 as c8, d2130 as c9, d2225 as c10, d14 as c11, d1774 as c12, d2131 as c13, d2472 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2472 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2472;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseMeta"]:c3(),["ResponseWarning"]:c4(),["ReturnActor"]:c5(),["ReturnDisposition"]:c6(),["ReturnReceipt"]:c7(),["ReturnReceiptLineItem"]:c8(),["ReturnSourceSystem"]:c9(),["ReturnUnverifiedItem"]:c10(),["SharedCodec1"]:c11(),["SharedCodec448"]:c12(),["SharedCodec504"]:c13(),["VerifyReturnReceiptLineItemResponse"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeVerifyReturnReceiptLineItemResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
