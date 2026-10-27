import { d3809 as c0, d3810 as c2, d3811 as c4, d3812 as c5, d3813 as c6, d3814 as c7, d3815 as c8 } from '../descriptors/data/159.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d349 as c1 } from '../descriptors/data/19.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d3013 as c3 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d349 as d349 } from '../descriptors/data/19.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d349;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscount"]:c0(),["DiscountPreviewRequest"]:c1(),["ManualDiscountRequest"]:c2(),["MoneyValue"]:c3(),["PromotionRefRequest"]:c4(),["SharedCodec1038"]:c5(),["SharedCodec1039"]:c6(),["SharedCodec3"]:c7(),["SharedCodec4"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
