import { d816 as c0, d314 as c1, d1775 as c2, d1776 as c3, d2112 as c4, d2113 as c5, d2118 as c6, d2120 as c7, d2132 as c8, d2133 as c9, d2130 as c10, d14 as c11, d1774 as c12, d2131 as c13 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d816 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d816;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GetReturnInspectionResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnInspection"]:c8(),["ReturnInspectionLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["SharedCodec1"]:c11(),["SharedCodec448"]:c12(),["SharedCodec504"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGetReturnInspectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
