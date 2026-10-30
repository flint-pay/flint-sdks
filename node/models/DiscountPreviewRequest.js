import { d5562 as c0, d5563 as c1, d5564 as c2 } from '../descriptors/data/250.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d536 as c3 } from '../descriptors/data/28.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5181 as c4 } from '../descriptors/data/230.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c5 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5182 as c6, d5183 as c7 } from '../descriptors/data/231.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5576 as c8 } from '../descriptors/data/251.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d536 as d536 } from '../descriptors/data/28.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d536;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscount"]:c0(),["CreateOrderDiscountManual"]:c1(),["CreateOrderDiscountPromotion"]:c2(),["DiscountPreviewRequest"]:c3(),["ManualDiscountRequest"]:c4(),["MoneyValue"]:c5(),["PromotionRefInputPromotionCode"]:c6(),["PromotionRefInputPromotionID"]:c7(),["PromotionRefRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
