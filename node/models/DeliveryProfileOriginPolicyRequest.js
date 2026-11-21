import { d8747 as c0 } from '../descriptors/data/391.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8767 as c1, d8768 as c2, d8769 as c3, d8770 as c4, d8771 as c5 } from '../descriptors/data/392.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8747 as d8747 } from '../descriptors/data/391.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8747;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileOriginPolicyRequest"]:c0(),["SharedCodec991"]:c1(),["SharedCodec992"]:c2(),["SharedCodec994"]:c3(),["SharedCodec995"]:c4(),["SharedCodec996"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileOriginPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
