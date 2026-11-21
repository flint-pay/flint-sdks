import { d8589 as c0, d8590 as c1 } from '../descriptors/data/382.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8614 as c2 } from '../descriptors/data/383.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8589 as d8589 } from '../descriptors/data/382.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8589;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequest"]:c0(),["DeliveryBlackoutIntervalRequest"]:c1(),["DeliveryWeeklyIntervalRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryAvailabilityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
