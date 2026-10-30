import { d227 as c0 } from '../descriptors/data/11.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d667 as c1, d669 as c2, d672 as c3 } from '../descriptors/data/34.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5420 as c4, d5421 as c5, d5422 as c6, d5423 as c7, d5419 as c8, d5404 as c9, d5405 as c10, d5406 as c11, d5416 as c16, d5417 as c17, d5418 as c18, d5407 as c19, d5408 as c20, d5409 as c21, d5410 as c22, d5411 as c23 } from '../descriptors/data/243.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1491 as c12, d1492 as c13, d1493 as c14 } from '../descriptors/data/69.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1494 as c15 } from '../descriptors/data/70.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d227 as d227 } from '../descriptors/data/11.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d227;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec228"]:c5(),["SharedCodec229"]:c6(),["SharedCodec230"]:c7(),["SharedCodec231"]:c8(),["SharedCodec232"]:c9(),["SharedCodec233"]:c10(),["SharedCodec234"]:c11(),["SharedCodec235"]:c12(),["SharedCodec236"]:c13(),["SharedCodec237"]:c14(),["SharedCodec238"]:c15(),["SharedCodec626"]:c16(),["SharedCodec627"]:c17(),["SharedCodec628"]:c18(),["SharedCodec629"]:c19(),["SharedCodec630"]:c20(),["SharedCodec631"]:c21(),["SharedCodec632"]:c22(),["SharedCodec633"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
