import { d1734 as c0, d74 as c1, d1786 as c2, d1785 as c3, d2121 as c4, d2122 as c5, d2127 as c6, d2129 as c7, d2204 as c8, d2205 as c9, d2139 as c10, d2206 as c11, d2140 as c12 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1734 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnReceiptsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnReceipt"]:c8(),["ReturnReceiptLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["ReturnUnverifiedItem"]:c11(),["SharedCodec534"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnReceiptsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
