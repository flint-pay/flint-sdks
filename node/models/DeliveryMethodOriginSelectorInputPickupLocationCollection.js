import { d432 as c0 } from '../descriptors/data/23.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4945 as c1, d4946 as c2 } from '../descriptors/data/218.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4972 as c3, d4973 as c4, d4975 as c5 } from '../descriptors/data/219.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d432 as d432 } from '../descriptors/data/23.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d432;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputPickupLocationCollection"]:c0(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c2(),["SharedCodec183"]:c3(),["SharedCodec184"]:c4(),["SharedCodec186"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputPickupLocationCollection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
