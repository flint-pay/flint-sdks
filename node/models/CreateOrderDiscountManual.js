import { d9367 as c0, d9371 as c1 } from '../descriptors/data/425.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c2 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8249 as c3, d8250 as c4, d8251 as c5 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9367 as d9367 } from '../descriptors/data/425.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9367;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscountManual"]:c0(),["ManualDiscountRequest"]:c1(),["MoneyValue"]:c2(),["PromotionRefInputPromotionCode"]:c3(),["PromotionRefInputPromotionID"]:c4(),["PromotionRefRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderDiscountManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
