import { d6373 as c0 } from '../descriptors/data/299.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4189 as c1 } from '../descriptors/data/174.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4189 as d4189 } from '../descriptors/data/174.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4189;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1416"]:c0(),["UpdateProductOptionValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionValueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
