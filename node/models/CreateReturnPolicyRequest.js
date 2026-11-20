import { d382 as c0 } from '../descriptors/data/23.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8048 as c1 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c2 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10584 as c3, d10586 as c4, d10588 as c5, d10590 as c6, d10592 as c7, d10595 as c8, d10596 as c9, d10597 as c10, d10598 as c11, d10599 as c12 } from '../descriptors/data/501.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10600 as c13, d10601 as c14, d10602 as c15, d10603 as c16, d10604 as c17, d10605 as c18, d10606 as c19, d10607 as c20, d10608 as c21, d10609 as c22 } from '../descriptors/data/502.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d382 as d382 } from '../descriptors/data/23.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec2735"]:c8(),["SharedCodec2736"]:c9(),["SharedCodec2737"]:c10(),["SharedCodec2738"]:c11(),["SharedCodec2739"]:c12(),["SharedCodec2740"]:c13(),["SharedCodec2741"]:c14(),["SharedCodec2742"]:c15(),["SharedCodec2743"]:c16(),["SharedCodec2744"]:c17(),["SharedCodec2745"]:c18(),["SharedCodec2746"]:c19(),["SharedCodec2747"]:c20(),["SharedCodec2748"]:c21(),["SharedCodec2749"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
