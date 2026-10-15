import { d439 as c0, d447 as c1, d457 as c2, d323 as c3, d2191 as c4, d2235 as c5, d2276 as c6, d2279 as c7, d2284 as c8, d444 as c9, d445 as c10, d454 as c11, d456 as c12, d455 as c13, d1994 as c14, d2189 as c15, d2190 as c16, d2271 as c17, d2270 as c18, d2273 as c19, d2272 as c20, d2274 as c21 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d447 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d447;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec147"]:c9(),["SharedCodec148"]:c10(),["SharedCodec149"]:c11(),["SharedCodec150"]:c12(),["SharedCodec151"]:c13(),["SharedCodec501"]:c14(),["SharedCodec527"]:c15(),["SharedCodec528"]:c16(),["SharedCodec574"]:c17(),["SharedCodec575"]:c18(),["SharedCodec576"]:c19(),["SharedCodec577"]:c20(),["SharedCodec578"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
