import { d8305 as c0, d8306 as c1, d8307 as c2, d8308 as c3, d8309 as c4 } from '../descriptors/data/366.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8331 as c5, d8332 as c6, d8333 as c7, d8334 as c8, d8335 as c9, d8336 as c10, d8337 as c11, d8338 as c12, d8339 as c13 } from '../descriptors/data/367.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8309 as d8309 } from '../descriptors/data/366.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8309;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec390"]:c5(),["SharedCodec391"]:c6(),["SharedCodec392"]:c7(),["SharedCodec393"]:c8(),["SharedCodec394"]:c9(),["SharedCodec395"]:c10(),["SharedCodec396"]:c11(),["SharedCodec397"]:c12(),["SharedCodec398"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
