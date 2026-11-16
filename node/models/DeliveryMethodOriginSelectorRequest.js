import { d8395 as c0, d8396 as c1, d8397 as c2, d8398 as c3, d8399 as c4 } from '../descriptors/data/369.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8421 as c5, d8422 as c6, d8423 as c7, d8424 as c8, d8425 as c9, d8426 as c10, d8427 as c11, d8428 as c12, d8429 as c13 } from '../descriptors/data/370.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8399 as d8399 } from '../descriptors/data/369.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8399;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec410"]:c5(),["SharedCodec411"]:c6(),["SharedCodec412"]:c7(),["SharedCodec413"]:c8(),["SharedCodec414"]:c9(),["SharedCodec415"]:c10(),["SharedCodec416"]:c11(),["SharedCodec417"]:c12(),["SharedCodec418"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
