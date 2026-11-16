import { d328 as c0 } from '../descriptors/data/19.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8234 as c3, d8235 as c4 } from '../descriptors/data/400.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8237 as c5, d8238 as c6, d8239 as c7, d8240 as c8, d8241 as c9, d8242 as c10, d8243 as c11, d8245 as c12, d8246 as c13, d8247 as c14, d8248 as c15, d8249 as c16, d8252 as c22, d8253 as c23, d8254 as c24, d8257 as c25 } from '../descriptors/data/401.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7519 as c17, d7520 as c18, d7521 as c19, d7522 as c20, d7523 as c21 } from '../descriptors/data/359.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8258 as c26, d8259 as c27, d8260 as c28 } from '../descriptors/data/402.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d328 as d328 } from '../descriptors/data/19.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d328;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCodeRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrenceRequest"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec1337"]:c12(),["SharedCodec1338"]:c13(),["SharedCodec1339"]:c14(),["SharedCodec1340"]:c15(),["SharedCodec1341"]:c16(),["SharedCodec1344"]:c17(),["SharedCodec1345"]:c18(),["SharedCodec1346"]:c19(),["SharedCodec1347"]:c20(),["SharedCodec1348"]:c21(),["SharedCodec1349"]:c22(),["SharedCodec1350"]:c23(),["SharedCodec1351"]:c24(),["SharedCodec1376"]:c25(),["SharedCodec1377"]:c26(),["SharedCodec1378"]:c27(),["SharedCodec1379"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
