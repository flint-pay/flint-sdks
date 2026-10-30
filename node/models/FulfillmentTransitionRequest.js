import { d595 as c0 } from '../descriptors/data/31.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5262 as c1, d5263 as c2, d5264 as c3, d5265 as c4, d5266 as c5, d5267 as c6, d5268 as c7, d5269 as c8, d5270 as c9, d5271 as c10, d5272 as c11, d5273 as c12, d5274 as c13, d5275 as c14 } from '../descriptors/data/236.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d595 as d595 } from '../descriptors/data/31.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d595;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec584"]:c1(),["SharedCodec585"]:c2(),["SharedCodec586"]:c3(),["SharedCodec587"]:c4(),["SharedCodec588"]:c5(),["SharedCodec589"]:c6(),["SharedCodec590"]:c7(),["SharedCodec591"]:c8(),["SharedCodec592"]:c9(),["SharedCodec593"]:c10(),["SharedCodec594"]:c11(),["SharedCodec595"]:c12(),["SharedCodec596"]:c13(),["SharedCodec597"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
