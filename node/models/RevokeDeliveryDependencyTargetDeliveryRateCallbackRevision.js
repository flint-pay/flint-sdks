import { d1270 as c0 } from '../descriptors/data/60.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5129 as c1, d5130 as c2 } from '../descriptors/data/228.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1270 as d1270 } from '../descriptors/data/60.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1270;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision"]:c0(),["SharedCodec1230"]:c1(),["SharedCodec1231"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
