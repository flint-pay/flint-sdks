import { d1272 as c0 } from '../descriptors/data/60.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5120 as c1, d5121 as c2 } from '../descriptors/data/227.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1272 as d1272 } from '../descriptors/data/60.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1272;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetLocationGeography"]:c0(),["SharedCodec1221"]:c1(),["SharedCodec1222"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetLocationGeography(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
