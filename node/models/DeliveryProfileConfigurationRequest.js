import { d8744 as c0 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8747 as c1, d8758 as c2, d8759 as c3, d8760 as c4, d8761 as c5, d8762 as c6, d8763 as c7, d8764 as c8, d8765 as c9, d8766 as c10 } from '../descriptors/data/391.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8767 as c11, d8768 as c12, d8769 as c13, d8770 as c14, d8771 as c15 } from '../descriptors/data/392.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8744 as d8744 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8744;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec974"]:c2(),["SharedCodec975"]:c3(),["SharedCodec976"]:c4(),["SharedCodec977"]:c5(),["SharedCodec978"]:c6(),["SharedCodec979"]:c7(),["SharedCodec980"]:c8(),["SharedCodec987"]:c9(),["SharedCodec988"]:c10(),["SharedCodec991"]:c11(),["SharedCodec992"]:c12(),["SharedCodec994"]:c13(),["SharedCodec995"]:c14(),["SharedCodec996"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
