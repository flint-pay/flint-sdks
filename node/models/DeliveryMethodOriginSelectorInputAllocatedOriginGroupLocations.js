import { d8682 as c0 } from '../descriptors/data/388.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8715 as c1 } from '../descriptors/data/389.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8682 as d8682 } from '../descriptors/data/388.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8682;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations"]:c0(),["SharedCodec415"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
