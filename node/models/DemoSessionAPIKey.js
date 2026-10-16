import { d733 as c0, d15 as c1, d14 as c2 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d733 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d733;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DemoSessionAPIKey"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDemoSessionAPIKey(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
