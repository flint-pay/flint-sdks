import { d7928 as c0 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1691 as c1 } from '../descriptors/data/83.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10600 as c2 } from '../descriptors/data/500.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10602 as c3, d10604 as c4, d10606 as c5, d10608 as c6, d10611 as c7, d10612 as c8, d10613 as c9, d10614 as c10, d10615 as c11, d10616 as c12, d10617 as c13, d10618 as c14, d10619 as c15, d10620 as c16 } from '../descriptors/data/501.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10621 as c17, d10622 as c18, d10623 as c19, d10624 as c20, d10625 as c21 } from '../descriptors/data/502.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1691 as d1691 } from '../descriptors/data/83.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2743"]:c7(),["SharedCodec2744"]:c8(),["SharedCodec2745"]:c9(),["SharedCodec2746"]:c10(),["SharedCodec2747"]:c11(),["SharedCodec2748"]:c12(),["SharedCodec2749"]:c13(),["SharedCodec2750"]:c14(),["SharedCodec2751"]:c15(),["SharedCodec2752"]:c16(),["SharedCodec2753"]:c17(),["SharedCodec2754"]:c18(),["SharedCodec2755"]:c19(),["SharedCodec2756"]:c20(),["SharedCodec2757"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
