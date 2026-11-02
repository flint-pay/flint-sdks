import { d6365 as c0 } from '../descriptors/data/298.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4398 as c1 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6365 as d6365 } from '../descriptors/data/298.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6365;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItemCreateRequest"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryItemCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
