import { d380 as c0 } from '../descriptors/data/23.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c1 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c2 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10529 as c3 } from '../descriptors/data/491.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10531 as c4, d10533 as c5, d10535 as c6, d10537 as c7, d10540 as c8, d10541 as c9, d10542 as c10, d10543 as c11, d10544 as c12, d10545 as c13, d10546 as c14, d10547 as c15, d10548 as c16, d10549 as c17, d10550 as c18 } from '../descriptors/data/492.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10551 as c19, d10552 as c20, d10553 as c21, d10554 as c22 } from '../descriptors/data/493.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d380 as d380 } from '../descriptors/data/23.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec2734"]:c8(),["SharedCodec2735"]:c9(),["SharedCodec2736"]:c10(),["SharedCodec2737"]:c11(),["SharedCodec2738"]:c12(),["SharedCodec2739"]:c13(),["SharedCodec2740"]:c14(),["SharedCodec2741"]:c15(),["SharedCodec2742"]:c16(),["SharedCodec2743"]:c17(),["SharedCodec2744"]:c18(),["SharedCodec2745"]:c19(),["SharedCodec2746"]:c20(),["SharedCodec2747"]:c21(),["SharedCodec2748"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
