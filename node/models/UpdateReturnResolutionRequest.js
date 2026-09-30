import { d69 as c0, d2057 as c1, d2061 as c2, d2062 as c3, d2065 as c4, d366 as c5, d2053 as c6, d2052 as c7, d2055 as c8, d2054 as c9, d2056 as c10, d2261 as c11, d2285 as c12, d2286 as c13, d2287 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2287 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec135"]:c5(),["SharedCodec530"]:c6(),["SharedCodec531"]:c7(),["SharedCodec532"]:c8(),["SharedCodec533"]:c9(),["SharedCodec534"]:c10(),["SharedCodec591"]:c11(),["SharedCodec597"]:c12(),["SharedCodec598"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
