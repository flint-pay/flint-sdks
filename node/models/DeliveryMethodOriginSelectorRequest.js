import { d6449 as c0, d6450 as c1, d6451 as c2, d6452 as c3, d6453 as c4 } from '../descriptors/data/297.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6472 as c5, d6473 as c6, d6474 as c7, d6475 as c8, d6476 as c9, d6477 as c10, d6478 as c11, d6479 as c12, d6480 as c13 } from '../descriptors/data/298.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6453 as d6453 } from '../descriptors/data/297.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6453;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec243"]:c5(),["SharedCodec244"]:c6(),["SharedCodec245"]:c7(),["SharedCodec246"]:c8(),["SharedCodec247"]:c9(),["SharedCodec248"]:c10(),["SharedCodec249"]:c11(),["SharedCodec250"]:c12(),["SharedCodec251"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
