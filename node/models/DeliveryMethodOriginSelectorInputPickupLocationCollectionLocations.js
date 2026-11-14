import { d6450 as c0 } from '../descriptors/data/297.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6476 as c1 } from '../descriptors/data/299.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6450 as d6450 } from '../descriptors/data/297.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6450;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations"]:c0(),["SharedCodec255"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputPickupLocationCollectionLocations(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
