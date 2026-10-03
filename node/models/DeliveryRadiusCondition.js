import { d585 as c0, d673 as c1, d674 as c2 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d673 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d673;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryDistance"]:c0(),["DeliveryRadiusCondition"]:c1(),["DeliveryRadiusOrigin"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRadiusCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
