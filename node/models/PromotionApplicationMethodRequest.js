import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6422 as c1 } from '../descriptors/data/301.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5861 as c2, d5862 as c11, d5863 as c12, d5864 as c13, d5865 as c14, d5866 as c15 } from '../descriptors/data/269.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6426 as c3, d6427 as c4, d6428 as c5, d6431 as c6, d6432 as c7, d6433 as c8, d6434 as c9, d6435 as c10, d6438 as c16, d6439 as c17, d6440 as c18, d6443 as c19, d6444 as c20, d6445 as c21, d6446 as c22 } from '../descriptors/data/302.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6422 as d6422 } from '../descriptors/data/301.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6422;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodRequest"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1067"]:c6(),["SharedCodec1068"]:c7(),["SharedCodec1069"]:c8(),["SharedCodec1070"]:c9(),["SharedCodec1071"]:c10(),["SharedCodec1074"]:c11(),["SharedCodec1075"]:c12(),["SharedCodec1076"]:c13(),["SharedCodec1077"]:c14(),["SharedCodec1078"]:c15(),["SharedCodec1079"]:c16(),["SharedCodec1080"]:c17(),["SharedCodec1081"]:c18(),["SharedCodec1104"]:c19(),["SharedCodec1105"]:c20(),["SharedCodec1106"]:c21(),["SharedCodec1107"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
