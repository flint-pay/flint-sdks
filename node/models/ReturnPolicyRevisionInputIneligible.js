import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1378 as c1 } from '../descriptors/data/65.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8384 as c2, d8386 as c3, d8388 as c4, d8390 as c5 } from '../descriptors/data/410.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8393 as c6, d8394 as c7, d8395 as c8, d8396 as c9, d8404 as c10, d8405 as c11, d8406 as c12, d8407 as c13 } from '../descriptors/data/411.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1378 as d1378 } from '../descriptors/data/65.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1480"]:c6(),["SharedCodec1481"]:c7(),["SharedCodec1482"]:c8(),["SharedCodec1483"]:c9(),["SharedCodec1491"]:c10(),["SharedCodec1492"]:c11(),["SharedCodec1493"]:c12(),["SharedCodec1494"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
