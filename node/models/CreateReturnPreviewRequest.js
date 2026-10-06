import { d470 as c0, d478 as c1, d488 as c2, d77 as c3, d2144 as c4, d2188 as c5, d2230 as c6, d2233 as c7, d2238 as c8, d475 as c9, d476 as c10, d485 as c11, d487 as c12, d486 as c13, d1949 as c14, d2142 as c15, d2143 as c16, d2225 as c17, d2224 as c18, d2227 as c19, d2226 as c20, d2228 as c21 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d478 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d478;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec177"]:c9(),["SharedCodec178"]:c10(),["SharedCodec179"]:c11(),["SharedCodec180"]:c12(),["SharedCodec181"]:c13(),["SharedCodec513"]:c14(),["SharedCodec543"]:c15(),["SharedCodec544"]:c16(),["SharedCodec590"]:c17(),["SharedCodec591"]:c18(),["SharedCodec592"]:c19(),["SharedCodec593"]:c20(),["SharedCodec594"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
