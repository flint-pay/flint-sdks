import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8206 as c1, d8207 as c2, d8208 as c3, d8211 as c4, d8212 as c5, d8213 as c6, d8214 as c7, d8215 as c8 } from '../descriptors/data/399.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8223 as c9, d8224 as c10, d8225 as c11, d8226 as c12 } from '../descriptors/data/400.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8206 as d8206 } from '../descriptors/data/399.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8206;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1330"]:c4(),["SharedCodec1331"]:c5(),["SharedCodec1332"]:c6(),["SharedCodec1333"]:c7(),["SharedCodec1334"]:c8(),["SharedCodec1369"]:c9(),["SharedCodec1370"]:c10(),["SharedCodec1371"]:c11(),["SharedCodec1372"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
