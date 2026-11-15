import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8348 as c1, d8350 as c2, d8352 as c3, d8354 as c4, d8356 as c5 } from '../descriptors/data/408.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8359 as c6, d8360 as c7, d8361 as c8, d8362 as c9, d8363 as c10, d8364 as c11, d8365 as c12, d8366 as c13, d8367 as c14, d8368 as c15, d8369 as c16, d8370 as c17, d8371 as c18, d8372 as c19, d8373 as c20 } from '../descriptors/data/409.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8348 as d8348 } from '../descriptors/data/408.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8348;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1473"]:c6(),["SharedCodec1474"]:c7(),["SharedCodec1475"]:c8(),["SharedCodec1476"]:c9(),["SharedCodec1477"]:c10(),["SharedCodec1478"]:c11(),["SharedCodec1479"]:c12(),["SharedCodec1480"]:c13(),["SharedCodec1481"]:c14(),["SharedCodec1482"]:c15(),["SharedCodec1483"]:c16(),["SharedCodec1484"]:c17(),["SharedCodec1485"]:c18(),["SharedCodec1486"]:c19(),["SharedCodec1487"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
