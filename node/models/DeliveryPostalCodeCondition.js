import { d4925 as c0 } from '../descriptors/data/216.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4926 as c1 } from '../descriptors/data/217.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4925 as d4925 } from '../descriptors/data/216.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4925;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPostalCodeCondition"]:c0(),["DeliveryPostalCodeValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPostalCodeCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
