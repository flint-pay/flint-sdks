import { d8744 as c0 } from '../descriptors/data/390.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8747 as c1, d8758 as c5, d8759 as c6, d8760 as c7, d8761 as c8, d8762 as c9, d8763 as c10, d8764 as c11, d8765 as c12, d8766 as c13 } from '../descriptors/data/391.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8057 as c2 } from '../descriptors/data/352.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8155 as c3 } from '../descriptors/data/359.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8491 as c4 } from '../descriptors/data/377.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8767 as c14, d8768 as c15, d8769 as c16, d8770 as c17, d8771 as c18 } from '../descriptors/data/392.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7757 as c19 } from '../descriptors/data/325.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d7757 as d7757 } from '../descriptors/data/325.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7757;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec3081"]:c2(),["SharedCodec3084"]:c3(),["SharedCodec3092"]:c4(),["SharedCodec974"]:c5(),["SharedCodec975"]:c6(),["SharedCodec976"]:c7(),["SharedCodec977"]:c8(),["SharedCodec978"]:c9(),["SharedCodec979"]:c10(),["SharedCodec980"]:c11(),["SharedCodec987"]:c12(),["SharedCodec988"]:c13(),["SharedCodec991"]:c14(),["SharedCodec992"]:c15(),["SharedCodec994"]:c16(),["SharedCodec995"]:c17(),["SharedCodec996"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
