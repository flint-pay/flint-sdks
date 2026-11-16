import { d6479 as c0, d6480 as c1, d6481 as c2, d6482 as c3, d6483 as c4 } from '../descriptors/data/298.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6502 as c5, d6503 as c6, d6504 as c7, d6505 as c8, d6506 as c9, d6507 as c10, d6508 as c11, d6509 as c12, d6510 as c13 } from '../descriptors/data/299.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6483 as d6483 } from '../descriptors/data/298.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6483;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec243"]:c5(),["SharedCodec244"]:c6(),["SharedCodec245"]:c7(),["SharedCodec246"]:c8(),["SharedCodec247"]:c9(),["SharedCodec248"]:c10(),["SharedCodec249"]:c11(),["SharedCodec250"]:c12(),["SharedCodec251"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
