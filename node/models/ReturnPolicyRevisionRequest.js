import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10584 as c1, d10586 as c2, d10588 as c3, d10590 as c4, d10592 as c5, d10595 as c6, d10596 as c7, d10597 as c8, d10598 as c9, d10599 as c10 } from '../descriptors/data/501.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10600 as c11, d10601 as c12, d10602 as c13, d10603 as c14, d10604 as c15, d10605 as c16, d10606 as c17, d10607 as c18, d10608 as c19, d10609 as c20 } from '../descriptors/data/502.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10584 as d10584 } from '../descriptors/data/501.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10584;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2735"]:c6(),["SharedCodec2736"]:c7(),["SharedCodec2737"]:c8(),["SharedCodec2738"]:c9(),["SharedCodec2739"]:c10(),["SharedCodec2740"]:c11(),["SharedCodec2741"]:c12(),["SharedCodec2742"]:c13(),["SharedCodec2743"]:c14(),["SharedCodec2744"]:c15(),["SharedCodec2745"]:c16(),["SharedCodec2746"]:c17(),["SharedCodec2747"]:c18(),["SharedCodec2748"]:c19(),["SharedCodec2749"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
