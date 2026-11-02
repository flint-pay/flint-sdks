import { d5099 as c0 } from '../descriptors/data/226.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5099 as d5099 } from '../descriptors/data/226.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5099;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateCallbackConfiguration"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateCallbackConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
