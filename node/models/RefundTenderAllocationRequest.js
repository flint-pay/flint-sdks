import { d323 as c0, d2147 as c1, d336 as c2, d2145 as c3, d2144 as c4, d2146 as c5 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2147 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2147;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["RefundTenderAllocationRequest"]:c1(),["SharedCodec104"]:c2(),["SharedCodec521"]:c3(),["SharedCodec522"]:c4(),["SharedCodec523"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
