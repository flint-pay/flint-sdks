import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1835 as c1 } from '../descriptors/data/92.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10689 as c2, d10691 as c3, d10693 as c4, d10695 as c5, d10700 as c6, d10701 as c7, d10702 as c8, d10703 as c9, d10704 as c10, d10705 as c11, d10706 as c12 } from '../descriptors/data/507.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10709 as c13, d10710 as c14, d10711 as c15, d10712 as c16 } from '../descriptors/data/508.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1835 as d1835 } from '../descriptors/data/92.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1835;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2775"]:c6(),["SharedCodec2776"]:c7(),["SharedCodec2777"]:c8(),["SharedCodec2778"]:c9(),["SharedCodec2779"]:c10(),["SharedCodec2780"]:c11(),["SharedCodec2781"]:c12(),["SharedCodec2784"]:c13(),["SharedCodec2785"]:c14(),["SharedCodec2786"]:c15(),["SharedCodec2787"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
