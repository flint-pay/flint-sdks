import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10529 as c1 } from '../descriptors/data/491.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10531 as c2, d10533 as c3, d10535 as c4, d10537 as c5, d10540 as c6, d10541 as c7, d10542 as c8, d10543 as c9, d10544 as c10, d10545 as c11, d10546 as c12, d10547 as c13, d10548 as c14, d10549 as c15, d10550 as c16 } from '../descriptors/data/492.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10551 as c17, d10552 as c18, d10553 as c19, d10554 as c20 } from '../descriptors/data/493.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10529 as d10529 } from '../descriptors/data/491.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10529;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2734"]:c6(),["SharedCodec2735"]:c7(),["SharedCodec2736"]:c8(),["SharedCodec2737"]:c9(),["SharedCodec2738"]:c10(),["SharedCodec2739"]:c11(),["SharedCodec2740"]:c12(),["SharedCodec2741"]:c13(),["SharedCodec2742"]:c14(),["SharedCodec2743"]:c15(),["SharedCodec2744"]:c16(),["SharedCodec2745"]:c17(),["SharedCodec2746"]:c18(),["SharedCodec2747"]:c19(),["SharedCodec2748"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
