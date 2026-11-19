import { d744 as c0 } from '../descriptors/data/41.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8249 as c1, d8250 as c2, d8251 as c3 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d744 as d744 } from '../descriptors/data/41.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d744;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreviewRequest"]:c0(),["PromotionRefInputPromotionCode"]:c1(),["PromotionRefInputPromotionID"]:c2(),["PromotionRefRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
