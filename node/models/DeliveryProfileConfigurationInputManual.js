import { d640 as c0 } from '../descriptors/data/36.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8747 as c1, d8758 as c2, d8759 as c3 } from '../descriptors/data/391.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8767 as c4, d8768 as c5, d8769 as c6, d8770 as c7, d8771 as c8 } from '../descriptors/data/392.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d640 as d640 } from '../descriptors/data/36.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d640;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec974"]:c2(),["SharedCodec975"]:c3(),["SharedCodec991"]:c4(),["SharedCodec992"]:c5(),["SharedCodec994"]:c6(),["SharedCodec995"]:c7(),["SharedCodec996"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
