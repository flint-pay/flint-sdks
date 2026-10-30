import { d332 as c0 } from '../descriptors/data/19.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4333 as c1 } from '../descriptors/data/183.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4300 as c2 } from '../descriptors/data/181.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6197 as c3 } from '../descriptors/data/287.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d332 as d332 } from '../descriptors/data/19.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d332;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateWorkloadIdentityRequest"]:c0(),["SharedCodec2"]:c1(),["SharedCodec3"]:c2(),["WorkloadIdentityClaimConditionRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
