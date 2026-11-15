import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1370 as c1 } from '../descriptors/data/66.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8350 as c2, d8352 as c3, d8354 as c4, d8356 as c5 } from '../descriptors/data/408.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8361 as c6, d8362 as c7, d8363 as c8, d8364 as c9, d8365 as c10, d8366 as c11, d8367 as c12, d8370 as c13, d8371 as c14, d8372 as c15, d8373 as c16 } from '../descriptors/data/409.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1370 as d1370 } from '../descriptors/data/66.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1370;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1475"]:c6(),["SharedCodec1476"]:c7(),["SharedCodec1477"]:c8(),["SharedCodec1478"]:c9(),["SharedCodec1479"]:c10(),["SharedCodec1480"]:c11(),["SharedCodec1481"]:c12(),["SharedCodec1484"]:c13(),["SharedCodec1485"]:c14(),["SharedCodec1486"]:c15(),["SharedCodec1487"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
