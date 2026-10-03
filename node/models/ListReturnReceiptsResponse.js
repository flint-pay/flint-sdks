import { d1732 as c0, d74 as c1, d1784 as c2, d1783 as c3, d2119 as c4, d2120 as c5, d2125 as c6, d2127 as c7, d2202 as c8, d2203 as c9, d2137 as c10, d2204 as c11, d2138 as c12 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1732 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1732;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnReceiptsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnReceipt"]:c8(),["ReturnReceiptLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["ReturnUnverifiedItem"]:c11(),["SharedCodec534"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnReceiptsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
