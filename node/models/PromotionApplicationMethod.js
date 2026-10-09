import { d323 as c0, d2059 as c1, d2070 as c2, d417 as c3, d2079 as c4, d2080 as c5, d422 as c6, d420 as c7, d419 as c8, d418 as c9, d421 as c10, d2058 as c11, d2068 as c12, d2069 as c13, d2077 as c14, d2076 as c15, d2075 as c16, d2078 as c17 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2059 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethod"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRule"]:c3(),["PromotionRuleGroup"]:c4(),["PromotionRuleValue"]:c5(),["SharedCodec136"]:c6(),["SharedCodec137"]:c7(),["SharedCodec138"]:c8(),["SharedCodec139"]:c9(),["SharedCodec140"]:c10(),["SharedCodec507"]:c11(),["SharedCodec508"]:c12(),["SharedCodec509"]:c13(),["SharedCodec512"]:c14(),["SharedCodec513"]:c15(),["SharedCodec514"]:c16(),["SharedCodec515"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
