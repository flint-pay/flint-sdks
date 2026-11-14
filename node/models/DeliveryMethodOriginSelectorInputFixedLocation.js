import { d498 as c0 } from '../descriptors/data/29.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6471 as c1, d6472 as c2 } from '../descriptors/data/298.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d498 as d498 } from '../descriptors/data/29.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d498;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorInputFixedLocation"]:c0(),["SharedCodec250"]:c1(),["SharedCodec251"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorInputFixedLocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
