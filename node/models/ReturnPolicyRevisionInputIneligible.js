import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1834 as c1 } from '../descriptors/data/92.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10689 as c2, d10691 as c3, d10693 as c4, d10695 as c5, d10698 as c6, d10699 as c7, d10700 as c8, d10701 as c9 } from '../descriptors/data/507.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10709 as c10, d10710 as c11, d10711 as c12, d10712 as c13 } from '../descriptors/data/508.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1834 as d1834 } from '../descriptors/data/92.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1834;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputIneligible"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2773"]:c6(),["SharedCodec2774"]:c7(),["SharedCodec2775"]:c8(),["SharedCodec2776"]:c9(),["SharedCodec2784"]:c10(),["SharedCodec2785"]:c11(),["SharedCodec2786"]:c12(),["SharedCodec2787"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputIneligible(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
