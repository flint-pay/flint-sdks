import { d8556 as c0, d8557 as c1, d8558 as c2, d8559 as c3, d8560 as c4 } from '../descriptors/data/377.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8582 as c5, d8583 as c6, d8584 as c7, d8585 as c8, d8586 as c9, d8587 as c10, d8588 as c11, d8589 as c12, d8590 as c13 } from '../descriptors/data/378.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8560 as d8560 } from '../descriptors/data/377.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8560;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec397"]:c5(),["SharedCodec398"]:c6(),["SharedCodec399"]:c7(),["SharedCodec400"]:c8(),["SharedCodec401"]:c9(),["SharedCodec402"]:c10(),["SharedCodec403"]:c11(),["SharedCodec404"]:c12(),["SharedCodec405"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
