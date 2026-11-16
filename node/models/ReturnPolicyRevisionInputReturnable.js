import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1379 as c1 } from '../descriptors/data/65.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8384 as c2, d8386 as c3, d8388 as c4, d8390 as c5 } from '../descriptors/data/410.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8395 as c6, d8396 as c7, d8397 as c8, d8398 as c9, d8399 as c10, d8400 as c11, d8401 as c12, d8404 as c13, d8405 as c14, d8406 as c15, d8407 as c16 } from '../descriptors/data/411.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1379 as d1379 } from '../descriptors/data/65.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1379;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1482"]:c6(),["SharedCodec1483"]:c7(),["SharedCodec1484"]:c8(),["SharedCodec1485"]:c9(),["SharedCodec1486"]:c10(),["SharedCodec1487"]:c11(),["SharedCodec1488"]:c12(),["SharedCodec1491"]:c13(),["SharedCodec1492"]:c14(),["SharedCodec1493"]:c15(),["SharedCodec1494"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
