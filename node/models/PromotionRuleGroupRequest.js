import { d4281 as c0 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6426 as c1, d6427 as c2, d6428 as c3, d6431 as c4, d6432 as c5, d6433 as c6, d6434 as c7, d6435 as c8, d6443 as c9, d6444 as c10, d6445 as c11, d6446 as c12 } from '../descriptors/data/302.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d6426 as d6426 } from '../descriptors/data/302.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6426;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1067"]:c4(),["SharedCodec1068"]:c5(),["SharedCodec1069"]:c6(),["SharedCodec1070"]:c7(),["SharedCodec1071"]:c8(),["SharedCodec1104"]:c9(),["SharedCodec1105"]:c10(),["SharedCodec1106"]:c11(),["SharedCodec1107"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
