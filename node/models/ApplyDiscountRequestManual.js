import { d16 as c0 } from '../descriptors/data/0.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5181 as c1 } from '../descriptors/data/230.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c2 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5182 as c3, d5183 as c4 } from '../descriptors/data/231.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5576 as c5 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d16 as d16 } from '../descriptors/data/0.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d16;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyDiscountRequestManual"]:c0(),["ManualDiscountRequest"]:c1(),["MoneyValue"]:c2(),["PromotionRefInputPromotionCode"]:c3(),["PromotionRefInputPromotionID"]:c4(),["PromotionRefRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyDiscountRequestManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
