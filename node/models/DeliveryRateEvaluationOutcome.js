import { d683 as c0 } from '../descriptors/data/37.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d690 as c1 } from '../descriptors/data/38.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1948 as c3, d1949 as c4 } from '../descriptors/data/96.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1950 as c5, d1951 as c6, d1952 as c7, d1954 as c8 } from '../descriptors/data/97.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8782 as c9, d8784 as c10, d8785 as c11, d8788 as c12 } from '../descriptors/data/393.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d683 as d683 } from '../descriptors/data/37.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d683;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec1035"]:c3(),["SharedCodec1036"]:c4(),["SharedCodec1037"]:c5(),["SharedCodec1038"]:c6(),["SharedCodec1039"]:c7(),["SharedCodec1040"]:c8(),["SharedCodec201"]:c9(),["SharedCodec203"]:c10(),["SharedCodec204"]:c11(),["SharedCodec207"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
