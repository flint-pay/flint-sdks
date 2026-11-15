import { d6451 as c0, d6452 as c1, d6453 as c2, d6454 as c3, d6455 as c4 } from '../descriptors/data/297.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6474 as c5, d6475 as c6, d6476 as c7, d6477 as c8, d6478 as c9, d6479 as c10, d6480 as c11, d6481 as c12, d6482 as c13 } from '../descriptors/data/298.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6455 as d6455 } from '../descriptors/data/297.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6455;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c2(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c3(),["DeliveryMethodOriginSelectorRequest"]:c4(),["SharedCodec243"]:c5(),["SharedCodec244"]:c6(),["SharedCodec245"]:c7(),["SharedCodec246"]:c8(),["SharedCodec247"]:c9(),["SharedCodec248"]:c10(),["SharedCodec249"]:c11(),["SharedCodec250"]:c12(),["SharedCodec251"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
