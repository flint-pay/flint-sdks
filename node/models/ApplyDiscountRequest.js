import { d14 as c0 } from '../descriptors/data/0.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3795 as c1, d3796 as c3, d3797 as c4, d3798 as c5, d3799 as c6, d3800 as c7 } from '../descriptors/data/158.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c2 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d14 as d14 } from '../descriptors/data/0.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d14;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyDiscountRequest"]:c0(),["ManualDiscountRequest"]:c1(),["MoneyValue"]:c2(),["PromotionRefRequest"]:c3(),["SharedCodec1033"]:c4(),["SharedCodec1034"]:c5(),["SharedCodec3"]:c6(),["SharedCodec4"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyDiscountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
