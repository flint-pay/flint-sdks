import { d682 as c0, d683 as c1 } from '../descriptors/data/37.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d690 as c2 } from '../descriptors/data/38.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c3 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1948 as c4, d1949 as c5 } from '../descriptors/data/96.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1950 as c6, d1951 as c7, d1952 as c8, d1954 as c9 } from '../descriptors/data/97.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8782 as c10, d8784 as c11, d8785 as c12, d8788 as c13 } from '../descriptors/data/393.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d682 as d682 } from '../descriptors/data/37.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d682;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec1035"]:c4(),["SharedCodec1036"]:c5(),["SharedCodec1037"]:c6(),["SharedCodec1038"]:c7(),["SharedCodec1039"]:c8(),["SharedCodec1040"]:c9(),["SharedCodec201"]:c10(),["SharedCodec203"]:c11(),["SharedCodec204"]:c12(),["SharedCodec207"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
