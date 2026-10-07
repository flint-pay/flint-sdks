import { d476 as c0, d484 as c1, d494 as c2, d77 as c3, d2177 as c4, d2221 as c5, d2263 as c6, d2266 as c7, d2271 as c8, d481 as c9, d482 as c10, d491 as c11, d493 as c12, d492 as c13, d1982 as c14, d2175 as c15, d2176 as c16, d2258 as c17, d2257 as c18, d2260 as c19, d2259 as c20, d2261 as c21 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d484 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d484;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec177"]:c9(),["SharedCodec178"]:c10(),["SharedCodec179"]:c11(),["SharedCodec180"]:c12(),["SharedCodec181"]:c13(),["SharedCodec520"]:c14(),["SharedCodec550"]:c15(),["SharedCodec551"]:c16(),["SharedCodec597"]:c17(),["SharedCodec598"]:c18(),["SharedCodec599"]:c19(),["SharedCodec600"]:c20(),["SharedCodec601"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
