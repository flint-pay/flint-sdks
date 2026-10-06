import { d475 as c0, d483 as c1, d493 as c2, d77 as c3, d2170 as c4, d2214 as c5, d2256 as c6, d2259 as c7, d2264 as c8, d480 as c9, d481 as c10, d490 as c11, d492 as c12, d491 as c13, d1975 as c14, d2168 as c15, d2169 as c16, d2251 as c17, d2250 as c18, d2253 as c19, d2252 as c20, d2254 as c21 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d483 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d483;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec177"]:c9(),["SharedCodec178"]:c10(),["SharedCodec179"]:c11(),["SharedCodec180"]:c12(),["SharedCodec181"]:c13(),["SharedCodec515"]:c14(),["SharedCodec545"]:c15(),["SharedCodec546"]:c16(),["SharedCodec592"]:c17(),["SharedCodec593"]:c18(),["SharedCodec594"]:c19(),["SharedCodec595"]:c20(),["SharedCodec596"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
