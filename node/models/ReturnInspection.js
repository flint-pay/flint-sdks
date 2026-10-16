import { d2184 as c0, d2186 as c1, d2198 as c2, d2199 as c3, d2196 as c4, d2197 as c5 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2198 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2198;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnActor"]:c0(),["ReturnDisposition"]:c1(),["ReturnInspection"]:c2(),["ReturnInspectionLineItem"]:c3(),["ReturnSourceSystem"]:c4(),["SharedCodec529"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInspection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
