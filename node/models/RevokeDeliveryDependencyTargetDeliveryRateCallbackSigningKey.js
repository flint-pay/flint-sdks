import { d1271 as c0 } from '../descriptors/data/60.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5123 as c1, d5124 as c2 } from '../descriptors/data/227.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1271 as d1271 } from '../descriptors/data/60.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1271;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey"]:c0(),["SharedCodec1224"]:c1(),["SharedCodec1225"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackSigningKey(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
