import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8210 as c1, d8211 as c2, d8212 as c3, d8215 as c4, d8216 as c5, d8217 as c6, d8218 as c7, d8219 as c8 } from '../descriptors/data/398.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8227 as c9, d8228 as c10, d8229 as c11, d8230 as c12 } from '../descriptors/data/399.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8210 as d8210 } from '../descriptors/data/398.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8210;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1343"]:c4(),["SharedCodec1344"]:c5(),["SharedCodec1345"]:c6(),["SharedCodec1346"]:c7(),["SharedCodec1347"]:c8(),["SharedCodec1385"]:c9(),["SharedCodec1386"]:c10(),["SharedCodec1387"]:c11(),["SharedCodec1388"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
