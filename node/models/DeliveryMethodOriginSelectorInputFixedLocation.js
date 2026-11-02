import { d431 as c0 } from '../descriptors/data/23.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4968 as c1, d4969 as c2 } from '../descriptors/data/219.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d431 as d431 } from '../descriptors/data/23.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d431;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputFixedLocation"]:c0(),["SharedCodec179"]:c1(),["SharedCodec180"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputFixedLocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
