import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1261 as c1 } from '../descriptors/data/61.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8209 as c2, d8210 as c3, d8211 as c4, d8212 as c5, d8215 as c6, d8216 as c7, d8217 as c8, d8218 as c9, d8219 as c10 } from '../descriptors/data/398.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7492 as c11 } from '../descriptors/data/356.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7493 as c12, d7494 as c13, d7495 as c14, d7496 as c15 } from '../descriptors/data/357.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8227 as c16, d8228 as c17, d8229 as c18, d8230 as c19 } from '../descriptors/data/399.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1261 as d1261 } from '../descriptors/data/61.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1261;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionBuyXGetYMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1343"]:c6(),["SharedCodec1344"]:c7(),["SharedCodec1345"]:c8(),["SharedCodec1346"]:c9(),["SharedCodec1347"]:c10(),["SharedCodec1350"]:c11(),["SharedCodec1351"]:c12(),["SharedCodec1352"]:c13(),["SharedCodec1353"]:c14(),["SharedCodec1354"]:c15(),["SharedCodec1385"]:c16(),["SharedCodec1386"]:c17(),["SharedCodec1387"]:c18(),["SharedCodec1388"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
