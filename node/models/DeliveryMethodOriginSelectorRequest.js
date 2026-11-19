import { d8557 as c0, d8558 as c1, d8559 as c2, d8560 as c3, d8561 as c4 } from '../descriptors/data/377.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8583 as c5, d8584 as c6, d8585 as c7, d8586 as c8, d8587 as c9, d8588 as c10, d8589 as c11, d8590 as c12, d8591 as c13 } from '../descriptors/data/378.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8561 as d8561 } from '../descriptors/data/377.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8561;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec398"]:c5(),["SharedCodec399"]:c6(),["SharedCodec400"]:c7(),["SharedCodec401"]:c8(),["SharedCodec402"]:c9(),["SharedCodec403"]:c10(),["SharedCodec404"]:c11(),["SharedCodec405"]:c12(),["SharedCodec406"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
