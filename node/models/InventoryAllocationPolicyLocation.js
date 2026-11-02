import { d5428 as c0 } from '../descriptors/data/244.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5428 as d5428 } from '../descriptors/data/244.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5428;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicyLocation"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationPolicyLocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
