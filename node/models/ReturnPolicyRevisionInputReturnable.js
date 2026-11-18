import { d7885 as c0 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1827 as c1 } from '../descriptors/data/91.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10531 as c2, d10533 as c3, d10535 as c4, d10537 as c5, d10542 as c6, d10543 as c7, d10544 as c8, d10545 as c9, d10546 as c10, d10547 as c11, d10548 as c12 } from '../descriptors/data/492.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10551 as c13, d10552 as c14, d10553 as c15, d10554 as c16 } from '../descriptors/data/493.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1827 as d1827 } from '../descriptors/data/91.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1827;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2736"]:c6(),["SharedCodec2737"]:c7(),["SharedCodec2738"]:c8(),["SharedCodec2739"]:c9(),["SharedCodec2740"]:c10(),["SharedCodec2741"]:c11(),["SharedCodec2742"]:c12(),["SharedCodec2745"]:c13(),["SharedCodec2746"]:c14(),["SharedCodec2747"]:c15(),["SharedCodec2748"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
