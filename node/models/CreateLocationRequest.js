import { d360 as c0, d1771 as c1, d1772 as c2, d1774 as c3 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d360 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d360;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateLocationRequest"]:c0(),["LocationAddress"]:c1(),["LocationCoordinate"]:c2(),["LocationInventoryRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateLocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
