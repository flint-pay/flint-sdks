import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8382 as c1, d8384 as c2, d8386 as c3, d8388 as c4, d8390 as c5 } from '../descriptors/data/410.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8393 as c6, d8394 as c7, d8395 as c8, d8396 as c9, d8397 as c10, d8398 as c11, d8399 as c12, d8400 as c13, d8401 as c14, d8402 as c15, d8403 as c16, d8404 as c17, d8405 as c18, d8406 as c19, d8407 as c20 } from '../descriptors/data/411.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8382 as d8382 } from '../descriptors/data/410.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1480"]:c6(),["SharedCodec1481"]:c7(),["SharedCodec1482"]:c8(),["SharedCodec1483"]:c9(),["SharedCodec1484"]:c10(),["SharedCodec1485"]:c11(),["SharedCodec1486"]:c12(),["SharedCodec1487"]:c13(),["SharedCodec1488"]:c14(),["SharedCodec1489"]:c15(),["SharedCodec1490"]:c16(),["SharedCodec1491"]:c17(),["SharedCodec1492"]:c18(),["SharedCodec1493"]:c19(),["SharedCodec1494"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
