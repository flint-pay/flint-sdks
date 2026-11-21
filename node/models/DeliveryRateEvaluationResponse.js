import { d682 as c0, d683 as c1 } from '../descriptors/data/37.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d689 as c2, d690 as c3 } from '../descriptors/data/38.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7928 as c4 } from '../descriptors/data/343.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1948 as c5, d1949 as c6 } from '../descriptors/data/96.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d1950 as c7, d1951 as c8, d1952 as c9, d1954 as c10 } from '../descriptors/data/97.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8782 as c11, d8784 as c12, d8785 as c13, d8788 as c14 } from '../descriptors/data/393.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d689 as d689 } from '../descriptors/data/38.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d689;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec1035"]:c5(),["SharedCodec1036"]:c6(),["SharedCodec1037"]:c7(),["SharedCodec1038"]:c8(),["SharedCodec1039"]:c9(),["SharedCodec1040"]:c10(),["SharedCodec201"]:c11(),["SharedCodec203"]:c12(),["SharedCodec204"]:c13(),["SharedCodec207"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
