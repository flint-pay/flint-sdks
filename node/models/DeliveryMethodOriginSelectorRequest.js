import { d4943 as c0 } from '../descriptors/data/217.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4944 as c1, d4945 as c2, d4946 as c3, d4947 as c4 } from '../descriptors/data/218.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4967 as c5, d4968 as c6, d4969 as c7, d4970 as c8, d4971 as c9, d4972 as c10, d4973 as c11, d4974 as c12, d4975 as c13 } from '../descriptors/data/219.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4947 as d4947 } from '../descriptors/data/218.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4947;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec178"]:c5(),["SharedCodec179"]:c6(),["SharedCodec180"]:c7(),["SharedCodec181"]:c8(),["SharedCodec182"]:c9(),["SharedCodec183"]:c10(),["SharedCodec184"]:c11(),["SharedCodec185"]:c12(),["SharedCodec186"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
