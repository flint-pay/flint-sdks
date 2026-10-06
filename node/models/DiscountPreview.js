import { d766 as c0, d77 as c1, d2060 as c2, d2064 as c3, d2065 as c4 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d766 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["MoneyValue"]:c1(),["PromotionCandidate"]:c2(),["PromotionCombinesWith"]:c3(),["PromotionExclusivity"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
