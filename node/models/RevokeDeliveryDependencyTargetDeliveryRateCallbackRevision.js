import { d1270 as c0 } from '../descriptors/data/60.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5129 as c1, d5130 as c2 } from '../descriptors/data/228.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1270 as d1270 } from '../descriptors/data/60.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1270;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryRateCallbackRevision"]:c0(),["SharedCodec1230"]:c1(),["SharedCodec1231"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryRateCallbackRevision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
