import { d437 as c0, d314 as c1, d2210 as c2, d2213 as c3, d2218 as c4, d434 as c5, d436 as c6, d435 as c7, d1933 as c8, d2205 as c9, d2204 as c10, d2207 as c11, d2206 as c12, d2208 as c13 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d437 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d437;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec141"]:c5(),["SharedCodec142"]:c6(),["SharedCodec143"]:c7(),["SharedCodec478"]:c8(),["SharedCodec549"]:c9(),["SharedCodec550"]:c10(),["SharedCodec551"]:c11(),["SharedCodec552"]:c12(),["SharedCodec553"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
