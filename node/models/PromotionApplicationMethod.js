import { d314 as c0, d2012 as c1, d2021 as c2, d407 as c3, d2030 as c4, d2031 as c5, d412 as c6, d410 as c7, d409 as c8, d408 as c9, d411 as c10, d2011 as c11, d2028 as c12, d2027 as c13, d2026 as c14, d2029 as c15 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2012 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2012;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec134"]:c6(),["SharedCodec135"]:c7(),["SharedCodec136"]:c8(),["SharedCodec137"]:c9(),["SharedCodec138"]:c10(),["SharedCodec489"]:c11(),["SharedCodec492"]:c12(),["SharedCodec493"]:c13(),["SharedCodec494"]:c14(),["SharedCodec495"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
