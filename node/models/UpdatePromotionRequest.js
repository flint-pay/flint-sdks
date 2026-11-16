import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8233 as c1 } from '../descriptors/data/400.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8236 as c2, d8240 as c3, d8241 as c4, d8242 as c5, d8244 as c6, d8245 as c7, d8246 as c8, d8247 as c9, d8248 as c10, d8249 as c11, d8250 as c12, d8251 as c13, d8257 as c19 } from '../descriptors/data/401.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7519 as c14, d7520 as c15, d7521 as c16, d7522 as c17, d7523 as c18 } from '../descriptors/data/359.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8258 as c20, d8259 as c21, d8260 as c22, d8261 as c25, d8262 as c26, d8263 as c27, d8264 as c28, d8265 as c29, d8266 as c30 } from '../descriptors/data/402.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5942 as c23 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6038 as c24 } from '../descriptors/data/274.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5709 as c31 } from '../descriptors/data/251.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5709 as d5709 } from '../descriptors/data/251.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5709;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1336"]:c6(),["SharedCodec1337"]:c7(),["SharedCodec1338"]:c8(),["SharedCodec1339"]:c9(),["SharedCodec1340"]:c10(),["SharedCodec1341"]:c11(),["SharedCodec1342"]:c12(),["SharedCodec1343"]:c13(),["SharedCodec1344"]:c14(),["SharedCodec1345"]:c15(),["SharedCodec1346"]:c16(),["SharedCodec1347"]:c17(),["SharedCodec1348"]:c18(),["SharedCodec1376"]:c19(),["SharedCodec1377"]:c20(),["SharedCodec1378"]:c21(),["SharedCodec1379"]:c22(),["SharedCodec1687"]:c23(),["SharedCodec1690"]:c24(),["SharedCodec1778"]:c25(),["SharedCodec1779"]:c26(),["SharedCodec1780"]:c27(),["SharedCodec1781"]:c28(),["SharedCodec1782"]:c29(),["SharedCodec1783"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
