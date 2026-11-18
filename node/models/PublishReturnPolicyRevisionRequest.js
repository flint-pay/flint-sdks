import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1692 as c1 } from '../descriptors/data/84.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10529 as c2 } from '../descriptors/data/491.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10531 as c3, d10533 as c4, d10535 as c5, d10537 as c6, d10540 as c7, d10541 as c8, d10542 as c9, d10543 as c10, d10544 as c11, d10545 as c12, d10546 as c13, d10547 as c14, d10548 as c15, d10549 as c16, d10550 as c17 } from '../descriptors/data/492.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10551 as c18, d10552 as c19, d10553 as c20, d10554 as c21 } from '../descriptors/data/493.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1692 as d1692 } from '../descriptors/data/84.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1692;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2734"]:c7(),["SharedCodec2735"]:c8(),["SharedCodec2736"]:c9(),["SharedCodec2737"]:c10(),["SharedCodec2738"]:c11(),["SharedCodec2739"]:c12(),["SharedCodec2740"]:c13(),["SharedCodec2741"]:c14(),["SharedCodec2742"]:c15(),["SharedCodec2743"]:c16(),["SharedCodec2744"]:c17(),["SharedCodec2745"]:c18(),["SharedCodec2746"]:c19(),["SharedCodec2747"]:c20(),["SharedCodec2748"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
