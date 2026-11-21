import { d595 as c0 } from '../descriptors/data/33.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8603 as c1, d8604 as c2 } from '../descriptors/data/383.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8634 as c3, d8635 as c4, d8637 as c5 } from '../descriptors/data/384.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d595 as d595 } from '../descriptors/data/33.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d595;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputPickupLocationCollection"]:c0(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet"]:c1(),["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c2(),["SharedCodec407"]:c3(),["SharedCodec408"]:c4(),["SharedCodec410"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputPickupLocationCollection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
