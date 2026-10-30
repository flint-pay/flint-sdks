import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6421 as c1 } from '../descriptors/data/301.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6423 as c2, d6426 as c3, d6427 as c4, d6428 as c5, d6430 as c6, d6431 as c7, d6432 as c8, d6433 as c9, d6434 as c10, d6435 as c11, d6436 as c12, d6437 as c13, d6443 as c19, d6444 as c20, d6445 as c21, d6446 as c22, d6447 as c25 } from '../descriptors/data/302.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5862 as c14, d5863 as c15, d5864 as c16, d5865 as c17, d5866 as c18 } from '../descriptors/data/269.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4399 as c23 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4511 as c24 } from '../descriptors/data/193.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6448 as c26, d6449 as c27, d6450 as c28, d6451 as c29, d6452 as c30 } from '../descriptors/data/303.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4193 as c31 } from '../descriptors/data/175.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4193 as d4193 } from '../descriptors/data/175.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4193;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1066"]:c6(),["SharedCodec1067"]:c7(),["SharedCodec1068"]:c8(),["SharedCodec1069"]:c9(),["SharedCodec1070"]:c10(),["SharedCodec1071"]:c11(),["SharedCodec1072"]:c12(),["SharedCodec1073"]:c13(),["SharedCodec1074"]:c14(),["SharedCodec1075"]:c15(),["SharedCodec1076"]:c16(),["SharedCodec1077"]:c17(),["SharedCodec1078"]:c18(),["SharedCodec1104"]:c19(),["SharedCodec1105"]:c20(),["SharedCodec1106"]:c21(),["SharedCodec1107"]:c22(),["SharedCodec1350"]:c23(),["SharedCodec1353"]:c24(),["SharedCodec1418"]:c25(),["SharedCodec1419"]:c26(),["SharedCodec1420"]:c27(),["SharedCodec1421"]:c28(),["SharedCodec1422"]:c29(),["SharedCodec1423"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
