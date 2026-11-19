import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1824 as c1 } from '../descriptors/data/91.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10534 as c2, d10536 as c3, d10538 as c4, d10540 as c5, d10543 as c6, d10544 as c7, d10545 as c8, d10546 as c9 } from '../descriptors/data/494.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10554 as c10, d10555 as c11, d10556 as c12, d10557 as c13 } from '../descriptors/data/495.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1824 as d1824 } from '../descriptors/data/91.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1824;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2734"]:c6(),["SharedCodec2735"]:c7(),["SharedCodec2736"]:c8(),["SharedCodec2737"]:c9(),["SharedCodec2745"]:c10(),["SharedCodec2746"]:c11(),["SharedCodec2747"]:c12(),["SharedCodec2748"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
