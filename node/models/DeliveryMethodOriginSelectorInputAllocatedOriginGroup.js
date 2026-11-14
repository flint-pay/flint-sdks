import { d497 as c0 } from '../descriptors/data/29.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6447 as c1, d6448 as c2 } from '../descriptors/data/297.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6474 as c3 } from '../descriptors/data/298.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6475 as c4, d6476 as c5 } from '../descriptors/data/299.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d497 as d497 } from '../descriptors/data/29.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d497;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroup"]:c0(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet"]:c1(),["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c2(),["SharedCodec253"]:c3(),["SharedCodec254"]:c4(),["SharedCodec255"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
