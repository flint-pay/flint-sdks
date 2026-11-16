import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8240 as c1, d8241 as c2, d8242 as c3, d8245 as c4, d8246 as c5, d8247 as c6, d8248 as c7, d8249 as c8, d8257 as c9 } from '../descriptors/data/401.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8258 as c10, d8259 as c11, d8260 as c12 } from '../descriptors/data/402.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8240 as d8240 } from '../descriptors/data/401.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1337"]:c4(),["SharedCodec1338"]:c5(),["SharedCodec1339"]:c6(),["SharedCodec1340"]:c7(),["SharedCodec1341"]:c8(),["SharedCodec1376"]:c9(),["SharedCodec1377"]:c10(),["SharedCodec1378"]:c11(),["SharedCodec1379"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
