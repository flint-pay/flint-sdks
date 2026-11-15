import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8199 as c1, d8202 as c2, d8206 as c3, d8207 as c4, d8208 as c5, d8210 as c6, d8211 as c7, d8212 as c8, d8213 as c9, d8214 as c10, d8215 as c11, d8216 as c12, d8217 as c13 } from '../descriptors/data/399.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7488 as c14, d7489 as c15, d7490 as c16, d7491 as c17, d7492 as c18 } from '../descriptors/data/358.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8223 as c19, d8224 as c20, d8225 as c21, d8226 as c22, d8227 as c25, d8228 as c26, d8229 as c27, d8230 as c28, d8231 as c29, d8232 as c30 } from '../descriptors/data/400.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5912 as c23 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6008 as c24 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5679 as c31 } from '../descriptors/data/250.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5679 as d5679 } from '../descriptors/data/250.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5679;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1329"]:c6(),["SharedCodec1330"]:c7(),["SharedCodec1331"]:c8(),["SharedCodec1332"]:c9(),["SharedCodec1333"]:c10(),["SharedCodec1334"]:c11(),["SharedCodec1335"]:c12(),["SharedCodec1336"]:c13(),["SharedCodec1337"]:c14(),["SharedCodec1338"]:c15(),["SharedCodec1339"]:c16(),["SharedCodec1340"]:c17(),["SharedCodec1341"]:c18(),["SharedCodec1369"]:c19(),["SharedCodec1370"]:c20(),["SharedCodec1371"]:c21(),["SharedCodec1372"]:c22(),["SharedCodec1680"]:c23(),["SharedCodec1683"]:c24(),["SharedCodec1771"]:c25(),["SharedCodec1772"]:c26(),["SharedCodec1773"]:c27(),["SharedCodec1774"]:c28(),["SharedCodec1775"]:c29(),["SharedCodec1776"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
