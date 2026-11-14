import { d5784 as c0 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1281 as c1 } from '../descriptors/data/62.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8348 as c2, d8350 as c3, d8352 as c4, d8354 as c5, d8356 as c6 } from '../descriptors/data/408.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d8359 as c7, d8360 as c8, d8361 as c9, d8362 as c10, d8363 as c11, d8364 as c12, d8365 as c13, d8366 as c14, d8367 as c15, d8368 as c16, d8369 as c17, d8370 as c18, d8371 as c19, d8372 as c20, d8373 as c21 } from '../descriptors/data/409.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d1281 as d1281 } from '../descriptors/data/62.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1281;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec1473"]:c7(),["SharedCodec1474"]:c8(),["SharedCodec1475"]:c9(),["SharedCodec1476"]:c10(),["SharedCodec1477"]:c11(),["SharedCodec1478"]:c12(),["SharedCodec1479"]:c13(),["SharedCodec1480"]:c14(),["SharedCodec1481"]:c15(),["SharedCodec1482"]:c16(),["SharedCodec1483"]:c17(),["SharedCodec1484"]:c18(),["SharedCodec1485"]:c19(),["SharedCodec1486"]:c20(),["SharedCodec1487"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
