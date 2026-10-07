import { d314 as c0, d2209 as c1, d2213 as c2, d2214 as c3, d2217 as c4, d1933 as c5, d2205 as c6, d2204 as c7, d2207 as c8, d2206 as c9, d2208 as c10, d2426 as c11, d2450 as c12, d2451 as c13, d2452 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2452 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnReplacementLineItemReplacementRequest"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["ReturnResolutionAdjustmentSet"]:c3(),["ReturnResolutionLineItemReplacementRequest"]:c4(),["SharedCodec478"]:c5(),["SharedCodec549"]:c6(),["SharedCodec550"]:c7(),["SharedCodec551"]:c8(),["SharedCodec552"]:c9(),["SharedCodec553"]:c10(),["SharedCodec611"]:c11(),["SharedCodec617"]:c12(),["SharedCodec618"]:c13(),["UpdateReturnResolutionRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
