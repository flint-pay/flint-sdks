import { d683 as c0 } from '../descriptors/data/34.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5453 as c1, d5454 as c2 } from '../descriptors/data/245.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d683 as d683 } from '../descriptors/data/34.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d683;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountTransitionRequest"]:c0(),["SharedCodec637"]:c1(),["SharedCodec638"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
