import { d685 as c0, d690 as c1 } from '../descriptors/data/38.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1948 as c3 } from '../descriptors/data/96.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1954 as c4 } from '../descriptors/data/97.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8788 as c5 } from '../descriptors/data/393.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d685 as d685 } from '../descriptors/data/38.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d685;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcomeCannotCalculate"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec1035"]:c3(),["SharedCodec1040"]:c4(),["SharedCodec207"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcomeCannotCalculate(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
