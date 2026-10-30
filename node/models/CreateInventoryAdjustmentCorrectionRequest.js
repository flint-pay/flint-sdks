import { d224 as c0 } from '../descriptors/data/11.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d672 as c1 } from '../descriptors/data/34.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5420 as c2, d5421 as c3, d5422 as c4, d5423 as c5, d5419 as c6, d5404 as c7, d5405 as c8, d5406 as c9, d5416 as c10, d5417 as c11, d5418 as c12 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d224 as d224 } from '../descriptors/data/11.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d224;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCorrectionRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec228"]:c3(),["SharedCodec229"]:c4(),["SharedCodec230"]:c5(),["SharedCodec231"]:c6(),["SharedCodec232"]:c7(),["SharedCodec233"]:c8(),["SharedCodec234"]:c9(),["SharedCodec626"]:c10(),["SharedCodec627"]:c11(),["SharedCodec628"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
