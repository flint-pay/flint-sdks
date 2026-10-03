import { d467 as c0, d475 as c1, d485 as c2, d74 as c3, d2134 as c4, d2178 as c5, d2220 as c6, d2223 as c7, d2228 as c8, d472 as c9, d473 as c10, d482 as c11, d484 as c12, d483 as c13, d1938 as c14, d2132 as c15, d2133 as c16, d2215 as c17, d2214 as c18, d2217 as c19, d2216 as c20, d2218 as c21 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d475 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d475;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec175"]:c9(),["SharedCodec176"]:c10(),["SharedCodec177"]:c11(),["SharedCodec178"]:c12(),["SharedCodec179"]:c13(),["SharedCodec504"]:c14(),["SharedCodec532"]:c15(),["SharedCodec533"]:c16(),["SharedCodec579"]:c17(),["SharedCodec580"]:c18(),["SharedCodec581"]:c19(),["SharedCodec582"]:c20(),["SharedCodec583"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
