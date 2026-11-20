import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1691 as c1 } from '../descriptors/data/83.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10584 as c2, d10586 as c3, d10588 as c4, d10590 as c5, d10592 as c6, d10595 as c7, d10596 as c8, d10597 as c9, d10598 as c10, d10599 as c11 } from '../descriptors/data/501.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10600 as c12, d10601 as c13, d10602 as c14, d10603 as c15, d10604 as c16, d10605 as c17, d10606 as c18, d10607 as c19, d10608 as c20, d10609 as c21 } from '../descriptors/data/502.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1691 as d1691 } from '../descriptors/data/83.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2735"]:c7(),["SharedCodec2736"]:c8(),["SharedCodec2737"]:c9(),["SharedCodec2738"]:c10(),["SharedCodec2739"]:c11(),["SharedCodec2740"]:c12(),["SharedCodec2741"]:c13(),["SharedCodec2742"]:c14(),["SharedCodec2743"]:c15(),["SharedCodec2744"]:c16(),["SharedCodec2745"]:c17(),["SharedCodec2746"]:c18(),["SharedCodec2747"]:c19(),["SharedCodec2748"]:c20(),["SharedCodec2749"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
