import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1825 as c1 } from '../descriptors/data/91.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10534 as c2, d10536 as c3, d10538 as c4, d10540 as c5, d10545 as c6, d10546 as c7, d10547 as c8, d10548 as c9, d10549 as c10, d10550 as c11, d10551 as c12 } from '../descriptors/data/494.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10554 as c13, d10555 as c14, d10556 as c15, d10557 as c16 } from '../descriptors/data/495.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1825 as d1825 } from '../descriptors/data/91.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1825;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2736"]:c6(),["SharedCodec2737"]:c7(),["SharedCodec2738"]:c8(),["SharedCodec2739"]:c9(),["SharedCodec2740"]:c10(),["SharedCodec2741"]:c11(),["SharedCodec2742"]:c12(),["SharedCodec2745"]:c13(),["SharedCodec2746"]:c14(),["SharedCodec2747"]:c15(),["SharedCodec2748"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
