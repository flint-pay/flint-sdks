import { d1727 as c0, d74 as c1, d1784 as c2, d1783 as c3, d2118 as c4, d2119 as c5, d2124 as c6, d2126 as c7, d2138 as c8, d2139 as c9, d2136 as c10, d2137 as c11 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d1727 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1727;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ListReturnInspectionsResponse"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["ResponseMeta"]:c4(),["ResponseWarning"]:c5(),["ReturnActor"]:c6(),["ReturnDisposition"]:c7(),["ReturnInspection"]:c8(),["ReturnInspectionLineItem"]:c9(),["ReturnSourceSystem"]:c10(),["SharedCodec534"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeListReturnInspectionsResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
