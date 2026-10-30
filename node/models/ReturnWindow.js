import { d6551 as c0 } from '../descriptors/data/309.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6551 as d6551 } from '../descriptors/data/309.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6551;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnWindow"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnWindow(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
