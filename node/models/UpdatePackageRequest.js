import { d2522 as c0, d2523 as c1, d2343 as c2, d2344 as c3, d2524 as c4 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2524 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2524;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec641"]:c0(),["SharedCodec642"]:c1(),["ShippingDimensions"]:c2(),["ShippingWeight"]:c3(),["UpdatePackageRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
