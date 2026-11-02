import { d739 as c0 } from '../descriptors/data/36.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d739 as d739 } from '../descriptors/data/36.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d739;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryTransferLineRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
