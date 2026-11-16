import { d8714 as c0, d8715 as c1, d8716 as c2, d8717 as c3 } from '../descriptors/data/387.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c4 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8058 as c5, d8059 as c6, d8060 as c7 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8714 as d8714 } from '../descriptors/data/387.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8714;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscount"]:c0(),["CreateOrderDiscountManual"]:c1(),["CreateOrderDiscountPromotion"]:c2(),["ManualDiscountRequest"]:c3(),["MoneyValue"]:c4(),["PromotionRefInputPromotionCode"]:c5(),["PromotionRefInputPromotionID"]:c6(),["PromotionRefRequest"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderDiscount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
