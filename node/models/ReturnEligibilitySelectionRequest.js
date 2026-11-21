import { d9704 as c0, d9706 as c1, d9711 as c2, d9713 as c3, d9714 as c4, d9715 as c5 } from '../descriptors/data/448.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d9706 as d9706 } from '../descriptors/data/448.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9706;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnEligibilityLineItemRequestModel"]:c0(),["ReturnEligibilitySelectionRequest"]:c1(),["SharedCodec2674"]:c2(),["SharedCodec2676"]:c3(),["SharedCodec2677"]:c4(),["SharedCodec2678"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnEligibilitySelectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
