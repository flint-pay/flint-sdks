import { d935 as c0 } from '../descriptors/data/42.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d3699 as c1, d3700 as c2 } from '../descriptors/data/153.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { d935 as d935 } from '../descriptors/data/42.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d935;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey"]:c0(),["SharedCodec1118"]:c1(),["SharedCodec1119"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
