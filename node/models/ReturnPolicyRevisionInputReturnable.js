import { d7920 as c0 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1826 as c1 } from '../descriptors/data/91.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10586 as c2, d10588 as c3, d10590 as c4, d10592 as c5, d10597 as c6, d10598 as c7, d10599 as c8 } from '../descriptors/data/501.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10600 as c9, d10601 as c10, d10602 as c11, d10603 as c12, d10606 as c13, d10607 as c14, d10608 as c15, d10609 as c16 } from '../descriptors/data/502.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1826 as d1826 } from '../descriptors/data/91.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1826;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2737"]:c6(),["SharedCodec2738"]:c7(),["SharedCodec2739"]:c8(),["SharedCodec2740"]:c9(),["SharedCodec2741"]:c10(),["SharedCodec2742"]:c11(),["SharedCodec2743"]:c12(),["SharedCodec2746"]:c13(),["SharedCodec2747"]:c14(),["SharedCodec2748"]:c15(),["SharedCodec2749"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
