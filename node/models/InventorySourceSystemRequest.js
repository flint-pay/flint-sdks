import { d5420 as c0, d5419 as c1, d5416 as c2, d5417 as c3, d5418 as c4 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5420 as d5420 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventorySourceSystemRequest"]:c0(),["SharedCodec231"]:c1(),["SharedCodec626"]:c2(),["SharedCodec627"]:c3(),["SharedCodec628"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventorySourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
