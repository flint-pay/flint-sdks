import { d1258 as c0 } from '../descriptors/data/59.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6017 as c1 } from '../descriptors/data/277.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1258 as d1258 } from '../descriptors/data/59.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1258;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnResolutionLineItemRequest"]:c0(),["ReturnShipmentLineItemAllocationRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnResolutionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
