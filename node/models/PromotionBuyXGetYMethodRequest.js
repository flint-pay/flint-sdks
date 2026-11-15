import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1254 as c1 } from '../descriptors/data/61.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8205 as c2, d8206 as c3, d8207 as c4, d8208 as c5, d8211 as c6, d8212 as c7, d8213 as c8, d8214 as c9, d8215 as c10 } from '../descriptors/data/399.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7488 as c11, d7489 as c12, d7490 as c13, d7491 as c14, d7492 as c15 } from '../descriptors/data/358.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8223 as c16, d8224 as c17, d8225 as c18, d8226 as c19 } from '../descriptors/data/400.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1254 as d1254 } from '../descriptors/data/61.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1254;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionBuyXGetYMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1330"]:c6(),["SharedCodec1331"]:c7(),["SharedCodec1332"]:c8(),["SharedCodec1333"]:c9(),["SharedCodec1334"]:c10(),["SharedCodec1337"]:c11(),["SharedCodec1338"]:c12(),["SharedCodec1339"]:c13(),["SharedCodec1340"]:c14(),["SharedCodec1341"]:c15(),["SharedCodec1369"]:c16(),["SharedCodec1370"]:c17(),["SharedCodec1371"]:c18(),["SharedCodec1372"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
