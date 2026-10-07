import { d419 as c0, d427 as c1, d437 as c2, d314 as c3, d2125 as c4, d2169 as c5, d2210 as c6, d2213 as c7, d2218 as c8, d424 as c9, d425 as c10, d434 as c11, d436 as c12, d435 as c13, d1933 as c14, d2123 as c15, d2124 as c16, d2205 as c17, d2204 as c18, d2207 as c19, d2206 as c20, d2208 as c21 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d427 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d427;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec139"]:c9(),["SharedCodec140"]:c10(),["SharedCodec141"]:c11(),["SharedCodec142"]:c12(),["SharedCodec143"]:c13(),["SharedCodec478"]:c14(),["SharedCodec502"]:c15(),["SharedCodec503"]:c16(),["SharedCodec549"]:c17(),["SharedCodec550"]:c18(),["SharedCodec551"]:c19(),["SharedCodec552"]:c20(),["SharedCodec553"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
