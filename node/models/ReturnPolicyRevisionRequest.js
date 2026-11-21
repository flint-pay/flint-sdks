import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10600 as c1 } from '../descriptors/data/500.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10602 as c2, d10604 as c3, d10606 as c4, d10608 as c5, d10611 as c6, d10612 as c7, d10613 as c8, d10614 as c9, d10615 as c10, d10616 as c11, d10617 as c12, d10618 as c13, d10619 as c14, d10620 as c15 } from '../descriptors/data/501.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10621 as c16, d10622 as c17, d10623 as c18, d10624 as c19, d10625 as c20 } from '../descriptors/data/502.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10600 as d10600 } from '../descriptors/data/500.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10600;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2743"]:c6(),["SharedCodec2744"]:c7(),["SharedCodec2745"]:c8(),["SharedCodec2746"]:c9(),["SharedCodec2747"]:c10(),["SharedCodec2748"]:c11(),["SharedCodec2749"]:c12(),["SharedCodec2750"]:c13(),["SharedCodec2751"]:c14(),["SharedCodec2752"]:c15(),["SharedCodec2753"]:c16(),["SharedCodec2754"]:c17(),["SharedCodec2755"]:c18(),["SharedCodec2756"]:c19(),["SharedCodec2757"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
