import { d6409 as c0, d6410 as c1, d6411 as c2, d6412 as c3, d6413 as c4 } from '../descriptors/data/292.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6432 as c5, d6433 as c6, d6434 as c7, d6435 as c8, d6436 as c9, d6437 as c10, d6438 as c11, d6439 as c12, d6440 as c13 } from '../descriptors/data/293.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6413 as d6413 } from '../descriptors/data/292.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6413;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec249"]:c5(),["SharedCodec250"]:c6(),["SharedCodec251"]:c7(),["SharedCodec252"]:c8(),["SharedCodec253"]:c9(),["SharedCodec254"]:c10(),["SharedCodec255"]:c11(),["SharedCodec256"]:c12(),["SharedCodec257"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
