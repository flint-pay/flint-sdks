import { d8772 as c0, d8773 as c1, d8777 as c2, d8778 as c4, d8779 as c5, d8780 as c6, d8781 as c7 } from '../descriptors/data/392.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c3 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8782 as c8, d8783 as c9, d8784 as c10, d8785 as c11, d8786 as c12, d8787 as c13, d8788 as c14 } from '../descriptors/data/393.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8772 as d8772 } from '../descriptors/data/392.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8772;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec197"]:c4(),["SharedCodec198"]:c5(),["SharedCodec199"]:c6(),["SharedCodec200"]:c7(),["SharedCodec201"]:c8(),["SharedCodec202"]:c9(),["SharedCodec203"]:c10(),["SharedCodec204"]:c11(),["SharedCodec205"]:c12(),["SharedCodec206"]:c13(),["SharedCodec207"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
