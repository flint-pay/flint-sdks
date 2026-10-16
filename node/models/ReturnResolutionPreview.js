import { d323 as c0, d2184 as c1, d2269 as c2, d2278 as c3, d2282 as c4, d2285 as c5, d2286 as c6 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2285 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2285;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnActor"]:c1(),["ReturnReplacementLineItem"]:c2(),["ReturnResolutionAdjustment"]:c3(),["ReturnResolutionLineItem"]:c4(),["ReturnResolutionPreview"]:c5(),["ReturnResolutionWarning"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnResolutionPreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
