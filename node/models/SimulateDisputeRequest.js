import { d4024 as c0 } from '../descriptors/data/165.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4024 as d4024 } from '../descriptors/data/165.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4024;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SimulateDisputeRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSimulateDisputeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
