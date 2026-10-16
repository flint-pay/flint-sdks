import { d896 as c0, d323 as c1, d2447 as c2, d2448 as c3, d2449 as c4, d2446 as c5, d2450 as c6 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2450 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2450;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ImageRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec605"]:c2(),["SharedCodec606"]:c3(),["SharedCodec607"]:c4(),["UpdateBundleComponentRequest"]:c5(),["UpdateBundleRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateBundleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
