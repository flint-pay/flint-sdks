import { d329 as c0 } from '../descriptors/data/20.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5919 as c1 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8210 as c3, d8211 as c4, d8213 as c5, d8214 as c6, d8215 as c7, d8216 as c8, d8217 as c9, d8218 as c10, d8219 as c11, d8221 as c12, d8222 as c13, d8223 as c14, d8224 as c15, d8225 as c16, d8228 as c22, d8229 as c23 } from '../descriptors/data/401.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7493 as c17 } from '../descriptors/data/359.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7494 as c18, d7495 as c19, d7496 as c20, d7497 as c21 } from '../descriptors/data/360.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8230 as c24, d8233 as c25, d8234 as c26, d8235 as c27, d8236 as c28 } from '../descriptors/data/402.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d329 as d329 } from '../descriptors/data/20.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d329;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCodeRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrenceRequest"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec1340"]:c12(),["SharedCodec1341"]:c13(),["SharedCodec1342"]:c14(),["SharedCodec1343"]:c15(),["SharedCodec1344"]:c16(),["SharedCodec1347"]:c17(),["SharedCodec1348"]:c18(),["SharedCodec1349"]:c19(),["SharedCodec1350"]:c20(),["SharedCodec1351"]:c21(),["SharedCodec1352"]:c22(),["SharedCodec1353"]:c23(),["SharedCodec1354"]:c24(),["SharedCodec1379"]:c25(),["SharedCodec1380"]:c26(),["SharedCodec1381"]:c27(),["SharedCodec1382"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
