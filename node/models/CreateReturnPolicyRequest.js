import { d380 as c0 } from '../descriptors/data/23.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8014 as c1 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c2 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10532 as c3 } from '../descriptors/data/493.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10534 as c4, d10536 as c5, d10538 as c6, d10540 as c7, d10543 as c8, d10544 as c9, d10545 as c10, d10546 as c11, d10547 as c12, d10548 as c13, d10549 as c14, d10550 as c15, d10551 as c16, d10552 as c17 } from '../descriptors/data/494.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10553 as c18, d10554 as c19, d10555 as c20, d10556 as c21, d10557 as c22 } from '../descriptors/data/495.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d380 as d380 } from '../descriptors/data/23.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec2734"]:c8(),["SharedCodec2735"]:c9(),["SharedCodec2736"]:c10(),["SharedCodec2737"]:c11(),["SharedCodec2738"]:c12(),["SharedCodec2739"]:c13(),["SharedCodec2740"]:c14(),["SharedCodec2741"]:c15(),["SharedCodec2742"]:c16(),["SharedCodec2743"]:c17(),["SharedCodec2744"]:c18(),["SharedCodec2745"]:c19(),["SharedCodec2746"]:c20(),["SharedCodec2747"]:c21(),["SharedCodec2748"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
