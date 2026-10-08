import { d1589 as c0, d2037 as c1, d2448 as c2, d2471 as c3 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2471 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2471;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicyConfiguration"]:c0(),["PolicyLocation"]:c1(),["SharedCodec608"]:c2(),["UpdateInventoryAllocationPolicyRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
