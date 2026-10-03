import { d469 as c0, d851 as c1, d74 as c2, d1786 as c3, d1785 as c4, d2121 as c5, d2122 as c6, d2127 as c7, d2129 as c8, d2141 as c9, d2142 as c10, d2139 as c11, d2140 as c12 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d469 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnInspectionResponse"]:c0(),["GetReturnInspectionResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["ReturnActor"]:c7(),["ReturnDisposition"]:c8(),["ReturnInspection"]:c9(),["ReturnInspectionLineItem"]:c10(),["ReturnSourceSystem"]:c11(),["SharedCodec534"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnInspectionResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
