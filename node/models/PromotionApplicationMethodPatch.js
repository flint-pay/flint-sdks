import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8203 as c1, d8210 as c2, d8211 as c3, d8212 as c4, d8214 as c5, d8215 as c6, d8216 as c7, d8217 as c8, d8218 as c9, d8219 as c10, d8220 as c11, d8221 as c12 } from '../descriptors/data/398.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7492 as c13 } from '../descriptors/data/356.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7493 as c14, d7494 as c15, d7495 as c16, d7496 as c17 } from '../descriptors/data/357.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8227 as c18, d8228 as c19, d8229 as c20, d8230 as c21 } from '../descriptors/data/399.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8203 as d8203 } from '../descriptors/data/398.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8203;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec1342"]:c5(),["SharedCodec1343"]:c6(),["SharedCodec1344"]:c7(),["SharedCodec1345"]:c8(),["SharedCodec1346"]:c9(),["SharedCodec1347"]:c10(),["SharedCodec1348"]:c11(),["SharedCodec1349"]:c12(),["SharedCodec1350"]:c13(),["SharedCodec1351"]:c14(),["SharedCodec1352"]:c15(),["SharedCodec1353"]:c16(),["SharedCodec1354"]:c17(),["SharedCodec1385"]:c18(),["SharedCodec1386"]:c19(),["SharedCodec1387"]:c20(),["SharedCodec1388"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
