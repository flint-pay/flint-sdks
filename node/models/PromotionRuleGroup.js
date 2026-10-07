import { d314 as c0, d407 as c1, d2030 as c2, d2031 as c3, d412 as c4, d410 as c5, d409 as c6, d408 as c7, d411 as c8, d2028 as c9, d2027 as c10, d2026 as c11, d2029 as c12 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2030 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2030;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleGroup"]:c2(),["PromotionRuleValue"]:c3(),["SharedCodec134"]:c4(),["SharedCodec135"]:c5(),["SharedCodec136"]:c6(),["SharedCodec137"]:c7(),["SharedCodec138"]:c8(),["SharedCodec492"]:c9(),["SharedCodec493"]:c10(),["SharedCodec494"]:c11(),["SharedCodec495"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
