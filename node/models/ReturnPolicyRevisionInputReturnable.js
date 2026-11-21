import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1826 as c1 } from '../descriptors/data/91.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10602 as c2, d10604 as c3, d10606 as c4, d10608 as c5, d10613 as c6, d10614 as c7, d10615 as c8, d10616 as c9, d10617 as c10, d10618 as c11, d10619 as c12 } from '../descriptors/data/501.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10622 as c13, d10623 as c14, d10624 as c15, d10625 as c16 } from '../descriptors/data/502.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1826 as d1826 } from '../descriptors/data/91.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1826;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2745"]:c6(),["SharedCodec2746"]:c7(),["SharedCodec2747"]:c8(),["SharedCodec2748"]:c9(),["SharedCodec2749"]:c10(),["SharedCodec2750"]:c11(),["SharedCodec2751"]:c12(),["SharedCodec2754"]:c13(),["SharedCodec2755"]:c14(),["SharedCodec2756"]:c15(),["SharedCodec2757"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
