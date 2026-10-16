import { d458 as c0, d323 as c1, d2276 as c2, d2279 as c3, d2284 as c4, d454 as c5, d456 as c6, d455 as c7, d1994 as c8, d2271 as c9, d2270 as c10, d2273 as c11, d2272 as c12, d2274 as c13 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d458 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d458;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec149"]:c5(),["SharedCodec150"]:c6(),["SharedCodec151"]:c7(),["SharedCodec501"]:c8(),["SharedCodec574"]:c9(),["SharedCodec575"]:c10(),["SharedCodec576"]:c11(),["SharedCodec577"]:c12(),["SharedCodec578"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
