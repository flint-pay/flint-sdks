import { d330 as c0 } from '../descriptors/data/20.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c1 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8204 as c3, d8205 as c4, d8207 as c5, d8208 as c6, d8209 as c7, d8210 as c8, d8211 as c9, d8212 as c10, d8213 as c11, d8215 as c12, d8216 as c13, d8217 as c14, d8218 as c15, d8219 as c16, d8222 as c22, d8223 as c23 } from '../descriptors/data/398.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7492 as c17 } from '../descriptors/data/356.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7493 as c18, d7494 as c19, d7495 as c20, d7496 as c21 } from '../descriptors/data/357.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8224 as c24, d8227 as c25, d8228 as c26, d8229 as c27, d8230 as c28 } from '../descriptors/data/399.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d330 as d330 } from '../descriptors/data/20.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d330;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCodeRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrenceRequest"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec1343"]:c12(),["SharedCodec1344"]:c13(),["SharedCodec1345"]:c14(),["SharedCodec1346"]:c15(),["SharedCodec1347"]:c16(),["SharedCodec1350"]:c17(),["SharedCodec1351"]:c18(),["SharedCodec1352"]:c19(),["SharedCodec1353"]:c20(),["SharedCodec1354"]:c21(),["SharedCodec1355"]:c22(),["SharedCodec1356"]:c23(),["SharedCodec1357"]:c24(),["SharedCodec1385"]:c25(),["SharedCodec1386"]:c26(),["SharedCodec1387"]:c27(),["SharedCodec1388"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
