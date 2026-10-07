import { d2431 as c0, d2441 as c1 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2431 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdatePayoutDestinationRequest"]:c0(),["UpdateRefundRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePayoutDestinationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
