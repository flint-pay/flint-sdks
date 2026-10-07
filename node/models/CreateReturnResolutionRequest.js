import { d494 as c0, d77 as c1, d2257 as c2, d2260 as c3, d2265 as c4, d490 as c5, d492 as c6, d491 as c7, d1976 as c8, d2252 as c9, d2251 as c10, d2254 as c11, d2253 as c12, d2255 as c13 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d494 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d494;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec179"]:c5(),["SharedCodec180"]:c6(),["SharedCodec181"]:c7(),["SharedCodec516"]:c8(),["SharedCodec593"]:c9(),["SharedCodec594"]:c10(),["SharedCodec595"]:c11(),["SharedCodec596"]:c12(),["SharedCodec597"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
