import { d1203 as c0 } from '../descriptors/data/56.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1203 as d1203 } from '../descriptors/data/56.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1203;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResourceVersionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceVersionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
