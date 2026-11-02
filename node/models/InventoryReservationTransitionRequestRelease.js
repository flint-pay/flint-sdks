import { d726 as c0 } from '../descriptors/data/36.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5504 as c1, d5505 as c2 } from '../descriptors/data/247.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d726 as d726 } from '../descriptors/data/36.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d726;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationTransitionRequestRelease"]:c0(),["SharedCodec670"]:c1(),["SharedCodec671"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestRelease(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
