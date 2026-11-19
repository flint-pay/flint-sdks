import { d7886 as c0 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1690 as c1 } from '../descriptors/data/84.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10532 as c2 } from '../descriptors/data/493.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10534 as c3, d10536 as c4, d10538 as c5, d10540 as c6, d10543 as c7, d10544 as c8, d10545 as c9, d10546 as c10, d10547 as c11, d10548 as c12, d10549 as c13, d10550 as c14, d10551 as c15, d10552 as c16 } from '../descriptors/data/494.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10553 as c17, d10554 as c18, d10555 as c19, d10556 as c20, d10557 as c21 } from '../descriptors/data/495.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d1690 as d1690 } from '../descriptors/data/84.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1690;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2734"]:c7(),["SharedCodec2735"]:c8(),["SharedCodec2736"]:c9(),["SharedCodec2737"]:c10(),["SharedCodec2738"]:c11(),["SharedCodec2739"]:c12(),["SharedCodec2740"]:c13(),["SharedCodec2741"]:c14(),["SharedCodec2742"]:c15(),["SharedCodec2743"]:c16(),["SharedCodec2744"]:c17(),["SharedCodec2745"]:c18(),["SharedCodec2746"]:c19(),["SharedCodec2747"]:c20(),["SharedCodec2748"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
