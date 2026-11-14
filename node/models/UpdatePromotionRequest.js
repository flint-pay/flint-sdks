import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8203 as c1, d8206 as c2, d8210 as c3, d8211 as c4, d8212 as c5, d8214 as c6, d8215 as c7, d8216 as c8, d8217 as c9, d8218 as c10, d8219 as c11, d8220 as c12, d8221 as c13 } from '../descriptors/data/398.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7492 as c14 } from '../descriptors/data/356.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7493 as c15, d7494 as c16, d7495 as c17, d7496 as c18 } from '../descriptors/data/357.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8227 as c19, d8228 as c20, d8229 as c21, d8230 as c22, d8231 as c25, d8232 as c26, d8233 as c27, d8234 as c28, d8235 as c29, d8236 as c30 } from '../descriptors/data/399.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5919 as c23 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6017 as c24 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5697 as c31 } from '../descriptors/data/250.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5697 as d5697 } from '../descriptors/data/250.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5697;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1342"]:c6(),["SharedCodec1343"]:c7(),["SharedCodec1344"]:c8(),["SharedCodec1345"]:c9(),["SharedCodec1346"]:c10(),["SharedCodec1347"]:c11(),["SharedCodec1348"]:c12(),["SharedCodec1349"]:c13(),["SharedCodec1350"]:c14(),["SharedCodec1351"]:c15(),["SharedCodec1352"]:c16(),["SharedCodec1353"]:c17(),["SharedCodec1354"]:c18(),["SharedCodec1385"]:c19(),["SharedCodec1386"]:c20(),["SharedCodec1387"]:c21(),["SharedCodec1388"]:c22(),["SharedCodec1697"]:c23(),["SharedCodec1700"]:c24(),["SharedCodec1788"]:c25(),["SharedCodec1789"]:c26(),["SharedCodec1790"]:c27(),["SharedCodec1791"]:c28(),["SharedCodec1792"]:c29(),["SharedCodec1793"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
