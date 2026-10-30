import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6421 as c1 } from '../descriptors/data/301.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6426 as c2, d6427 as c3, d6428 as c4, d6430 as c5, d6431 as c6, d6432 as c7, d6433 as c8, d6434 as c9, d6435 as c10, d6436 as c11, d6437 as c12, d6443 as c18, d6444 as c19, d6445 as c20, d6446 as c21 } from '../descriptors/data/302.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5862 as c13, d5863 as c14, d5864 as c15, d5865 as c16, d5866 as c17 } from '../descriptors/data/269.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6421 as d6421 } from '../descriptors/data/301.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6421;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec1066"]:c5(),["SharedCodec1067"]:c6(),["SharedCodec1068"]:c7(),["SharedCodec1069"]:c8(),["SharedCodec1070"]:c9(),["SharedCodec1071"]:c10(),["SharedCodec1072"]:c11(),["SharedCodec1073"]:c12(),["SharedCodec1074"]:c13(),["SharedCodec1075"]:c14(),["SharedCodec1076"]:c15(),["SharedCodec1077"]:c16(),["SharedCodec1078"]:c17(),["SharedCodec1104"]:c18(),["SharedCodec1105"]:c19(),["SharedCodec1106"]:c20(),["SharedCodec1107"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
