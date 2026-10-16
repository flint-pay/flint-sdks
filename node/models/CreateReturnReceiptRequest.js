import { d451 as c0, d2268 as c1, d2196 as c2, d2291 as c3, d2264 as c4, d2263 as c5, d2266 as c6, d2265 as c7, d2267 as c8 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d451 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d451;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystem"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec569"]:c4(),["SharedCodec570"]:c5(),["SharedCodec571"]:c6(),["SharedCodec572"]:c7(),["SharedCodec573"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
