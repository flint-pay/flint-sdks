import { d437 as c0 } from '../descriptors/data/23.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4976 as c1, d4977 as c2 } from '../descriptors/data/219.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5003 as c3, d5004 as c4, d5006 as c5 } from '../descriptors/data/220.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d437 as d437 } from '../descriptors/data/23.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d437;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputPickupLocationCollection"]:c0(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c2(),["SharedCodec185"]:c3(),["SharedCodec186"]:c4(),["SharedCodec188"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputPickupLocationCollection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
