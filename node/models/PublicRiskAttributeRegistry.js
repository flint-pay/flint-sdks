import { d2113 as c0, d2114 as c1 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2114 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2114;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicRiskAttribute"]:c0(),["PublicRiskAttributeRegistry"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublicRiskAttributeRegistry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
