import { d314 as c0, d1775 as c1, d1776 as c2, d2113 as c3, d14 as c4, d1774 as c5 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2113 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2113;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["ResponseWarning"]:c3(),["SharedCodec1"]:c4(),["SharedCodec448"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResponseWarning(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
