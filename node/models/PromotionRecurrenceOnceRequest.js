import { d1675 as c0 } from '../descriptors/data/83.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9683 as c1 } from '../descriptors/data/447.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1675 as d1675 } from '../descriptors/data/83.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1675;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceOnceRequest"]:c0(),["SharedCodec2430"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceOnceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
