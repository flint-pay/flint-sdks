import { d440 as c0 } from '../descriptors/data/24.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5575 as c1 } from '../descriptors/data/251.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d440 as d440 } from '../descriptors/data/24.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d440;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPreviewRoutingSource"]:c0(),["OrderInventoryRoutingSourceRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPreviewRoutingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
