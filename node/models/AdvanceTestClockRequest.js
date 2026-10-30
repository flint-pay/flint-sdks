import { d13 as c0 } from '../descriptors/data/0.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d13 as d13 } from '../descriptors/data/0.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d13;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdvanceTestClockRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAdvanceTestClockRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
