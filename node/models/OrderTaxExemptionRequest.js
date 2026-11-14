import { d6319 as c0 } from '../descriptors/data/289.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7233 as c1 } from '../descriptors/data/340.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7241 as c2, d7242 as c3, d7243 as c4, d7244 as c5, d7245 as c6, d7246 as c7, d7247 as c8 } from '../descriptors/data/341.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6156 as c9, d6157 as c10, d6158 as c11, d6159 as c12 } from '../descriptors/data/281.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7233 as d7233 } from '../descriptors/data/340.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7233;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1089"]:c2(),["SharedCodec1090"]:c3(),["SharedCodec1091"]:c4(),["SharedCodec1092"]:c5(),["SharedCodec1093"]:c6(),["SharedCodec1094"]:c7(),["SharedCodec1095"]:c8(),["SharedCodec492"]:c9(),["SharedCodec493"]:c10(),["SharedCodec494"]:c11(),["SharedCodec495"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
