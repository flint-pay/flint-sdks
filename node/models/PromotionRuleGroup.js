import { d323 as c0, d417 as c1, d2079 as c2, d2080 as c3, d422 as c4, d420 as c5, d419 as c6, d418 as c7, d421 as c8, d2077 as c9, d2076 as c10, d2075 as c11, d2078 as c12 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2079 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2079;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRule"]:c1(),["PromotionRuleGroup"]:c2(),["PromotionRuleValue"]:c3(),["SharedCodec136"]:c4(),["SharedCodec137"]:c5(),["SharedCodec138"]:c6(),["SharedCodec139"]:c7(),["SharedCodec140"]:c8(),["SharedCodec512"]:c9(),["SharedCodec513"]:c10(),["SharedCodec514"]:c11(),["SharedCodec515"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroup(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
