import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8234 as c1 } from '../descriptors/data/400.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8239 as c2, d8240 as c3, d8241 as c4, d8242 as c5, d8245 as c6, d8246 as c7, d8247 as c8, d8248 as c9, d8249 as c10, d8252 as c16, d8253 as c17, d8254 as c18, d8257 as c19 } from '../descriptors/data/401.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7519 as c11, d7520 as c12, d7521 as c13, d7522 as c14, d7523 as c15 } from '../descriptors/data/359.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8258 as c20, d8259 as c21, d8260 as c22 } from '../descriptors/data/402.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8234 as d8234 } from '../descriptors/data/400.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8234;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1337"]:c6(),["SharedCodec1338"]:c7(),["SharedCodec1339"]:c8(),["SharedCodec1340"]:c9(),["SharedCodec1341"]:c10(),["SharedCodec1344"]:c11(),["SharedCodec1345"]:c12(),["SharedCodec1346"]:c13(),["SharedCodec1347"]:c14(),["SharedCodec1348"]:c15(),["SharedCodec1349"]:c16(),["SharedCodec1350"]:c17(),["SharedCodec1351"]:c18(),["SharedCodec1376"]:c19(),["SharedCodec1377"]:c20(),["SharedCodec1378"]:c21(),["SharedCodec1379"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
