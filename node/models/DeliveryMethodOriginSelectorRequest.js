import { d6446 as c0, d6447 as c1, d6448 as c2, d6449 as c3 } from '../descriptors/data/294.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6450 as c4, d6469 as c5, d6470 as c6, d6471 as c7, d6472 as c8, d6473 as c9 } from '../descriptors/data/295.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6474 as c10, d6475 as c11, d6476 as c12, d6477 as c13 } from '../descriptors/data/296.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6450 as d6450 } from '../descriptors/data/295.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6450;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec251"]:c5(),["SharedCodec252"]:c6(),["SharedCodec253"]:c7(),["SharedCodec254"]:c8(),["SharedCodec255"]:c9(),["SharedCodec256"]:c10(),["SharedCodec257"]:c11(),["SharedCodec258"]:c12(),["SharedCodec259"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
