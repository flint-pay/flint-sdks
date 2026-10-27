import { d14 as c0 } from '../descriptors/data/0.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3810 as c1, d3811 as c3, d3812 as c4, d3813 as c5, d3814 as c6, d3815 as c7 } from '../descriptors/data/159.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d14 as d14 } from '../descriptors/data/0.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d14;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyDiscountRequest"]:c0(),["ManualDiscountRequest"]:c1(),["MoneyValue"]:c2(),["PromotionRefRequest"]:c3(),["SharedCodec1038"]:c4(),["SharedCodec1039"]:c5(),["SharedCodec3"]:c6(),["SharedCodec4"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyDiscountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
