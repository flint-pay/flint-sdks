import { d382 as c0 } from '../descriptors/data/23.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8056 as c1 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10600 as c3 } from '../descriptors/data/500.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10602 as c4, d10604 as c5, d10606 as c6, d10608 as c7, d10611 as c8, d10612 as c9, d10613 as c10, d10614 as c11, d10615 as c12, d10616 as c13, d10617 as c14, d10618 as c15, d10619 as c16, d10620 as c17 } from '../descriptors/data/501.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d10621 as c18, d10622 as c19, d10623 as c20, d10624 as c21, d10625 as c22 } from '../descriptors/data/502.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d382 as d382 } from '../descriptors/data/23.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec2743"]:c8(),["SharedCodec2744"]:c9(),["SharedCodec2745"]:c10(),["SharedCodec2746"]:c11(),["SharedCodec2747"]:c12(),["SharedCodec2748"]:c13(),["SharedCodec2749"]:c14(),["SharedCodec2750"]:c15(),["SharedCodec2751"]:c16(),["SharedCodec2752"]:c17(),["SharedCodec2753"]:c18(),["SharedCodec2754"]:c19(),["SharedCodec2755"]:c20(),["SharedCodec2756"]:c21(),["SharedCodec2757"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
