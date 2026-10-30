import { d5506 as c0 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5420 as c1, d5421 as c2, d5422 as c3, d5423 as c4, d5419 as c5, d5416 as c6, d5417 as c7, d5418 as c8 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5506 as d5506 } from '../descriptors/data/247.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5506;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec228"]:c2(),["SharedCodec229"]:c3(),["SharedCodec230"]:c4(),["SharedCodec231"]:c5(),["SharedCodec626"]:c6(),["SharedCodec627"]:c7(),["SharedCodec628"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
