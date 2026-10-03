import { d602 as c0, d601 as c1 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d602 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d602;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryLocationSet"]:c0(),["DeliveryLocationSetConfiguration"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryLocationSet(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
