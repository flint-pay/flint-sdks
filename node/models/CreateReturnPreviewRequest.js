import { d475 as c0, d483 as c1, d493 as c2, d77 as c3, d2171 as c4, d2215 as c5, d2257 as c6, d2260 as c7, d2265 as c8, d480 as c9, d481 as c10, d490 as c11, d492 as c12, d491 as c13, d1976 as c14, d2169 as c15, d2170 as c16, d2252 as c17, d2251 as c18, d2254 as c19, d2253 as c20, d2255 as c21 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d483 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d483;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec177"]:c9(),["SharedCodec178"]:c10(),["SharedCodec179"]:c11(),["SharedCodec180"]:c12(),["SharedCodec181"]:c13(),["SharedCodec516"]:c14(),["SharedCodec546"]:c15(),["SharedCodec547"]:c16(),["SharedCodec593"]:c17(),["SharedCodec594"]:c18(),["SharedCodec595"]:c19(),["SharedCodec596"]:c20(),["SharedCodec597"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
