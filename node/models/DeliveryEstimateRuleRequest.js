import { d8589 as c0, d8590 as c1, d8591 as c2 } from '../descriptors/data/382.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8501 as c3 } from '../descriptors/data/377.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8611 as c4, d8613 as c5, d8614 as c6 } from '../descriptors/data/383.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { d8501 as d8501 } from '../descriptors/data/377.js?sdk=78adcb94b2744b6fa493f7c5d1140994ead990994beb58e0d98f51ce65e8f253';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8501;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequest"]:c0(),["DeliveryBlackoutIntervalRequest"]:c1(),["DeliveryBusinessDayRangeRequest"]:c2(),["DeliveryEstimateRuleRequest"]:c3(),["DeliveryScheduleWindowRuleRequest"]:c4(),["DeliveryTransitTimeRuleRequest"]:c5(),["DeliveryWeeklyIntervalRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEstimateRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
