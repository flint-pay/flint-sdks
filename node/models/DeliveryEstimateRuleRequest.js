import { d8579 as c0, d8580 as c1, d8581 as c2 } from '../descriptors/data/382.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8491 as c3 } from '../descriptors/data/377.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8601 as c4, d8603 as c5, d8604 as c6 } from '../descriptors/data/383.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8491 as d8491 } from '../descriptors/data/377.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8491;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequest"]:c0(),["DeliveryBlackoutIntervalRequest"]:c1(),["DeliveryBusinessDayRangeRequest"]:c2(),["DeliveryEstimateRuleRequest"]:c3(),["DeliveryScheduleWindowRuleRequest"]:c4(),["DeliveryTransitTimeRuleRequest"]:c5(),["DeliveryWeeklyIntervalRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEstimateRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
