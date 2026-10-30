import { d6420 as c0, d6422 as c4 } from '../descriptors/data/301.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d271 as c1 } from '../descriptors/data/15.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4398 as c2 } from '../descriptors/data/187.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c3 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6424 as c5, d6425 as c6, d6426 as c8, d6427 as c9, d6428 as c10, d6429 as c11, d6431 as c12, d6432 as c13, d6433 as c14, d6434 as c15, d6435 as c16, d6438 as c22, d6439 as c23, d6440 as c24, d6443 as c25, d6444 as c26, d6445 as c27, d6446 as c28 } from '../descriptors/data/302.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5861 as c7, d5862 as c17, d5863 as c18, d5864 as c19, d5865 as c20, d5866 as c21 } from '../descriptors/data/269.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d271 as d271 } from '../descriptors/data/15.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d271;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["PromotionApplicationMethodRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrence"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec1067"]:c12(),["SharedCodec1068"]:c13(),["SharedCodec1069"]:c14(),["SharedCodec1070"]:c15(),["SharedCodec1071"]:c16(),["SharedCodec1074"]:c17(),["SharedCodec1075"]:c18(),["SharedCodec1076"]:c19(),["SharedCodec1077"]:c20(),["SharedCodec1078"]:c21(),["SharedCodec1079"]:c22(),["SharedCodec1080"]:c23(),["SharedCodec1081"]:c24(),["SharedCodec1104"]:c25(),["SharedCodec1105"]:c26(),["SharedCodec1106"]:c27(),["SharedCodec1107"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
