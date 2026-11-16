import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8233 as c1 } from '../descriptors/data/400.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8240 as c2, d8241 as c3, d8242 as c4, d8244 as c5, d8245 as c6, d8246 as c7, d8247 as c8, d8248 as c9, d8249 as c10, d8250 as c11, d8251 as c12, d8257 as c18 } from '../descriptors/data/401.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7519 as c13, d7520 as c14, d7521 as c15, d7522 as c16, d7523 as c17 } from '../descriptors/data/359.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8258 as c19, d8259 as c20, d8260 as c21 } from '../descriptors/data/402.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8233 as d8233 } from '../descriptors/data/400.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8233;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec1336"]:c5(),["SharedCodec1337"]:c6(),["SharedCodec1338"]:c7(),["SharedCodec1339"]:c8(),["SharedCodec1340"]:c9(),["SharedCodec1341"]:c10(),["SharedCodec1342"]:c11(),["SharedCodec1343"]:c12(),["SharedCodec1344"]:c13(),["SharedCodec1345"]:c14(),["SharedCodec1346"]:c15(),["SharedCodec1347"]:c16(),["SharedCodec1348"]:c17(),["SharedCodec1376"]:c18(),["SharedCodec1377"]:c19(),["SharedCodec1378"]:c20(),["SharedCodec1379"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
