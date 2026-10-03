import { d2071 as c0, d2085 as c1, d38 as c2 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2085 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2085;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RefundGiftCardDestination"]:c0(),["RefundTenderAllocation"]:c1(),["SharedCodec5"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRefundTenderAllocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
