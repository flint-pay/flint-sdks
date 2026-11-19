import { d8566 as c0, d8567 as c1, d8568 as c2 } from '../descriptors/data/382.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8478 as c3 } from '../descriptors/data/377.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8588 as c4, d8590 as c5, d8591 as c6 } from '../descriptors/data/383.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8478 as d8478 } from '../descriptors/data/377.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8478;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequest"]:c0(),["DeliveryBlackoutIntervalRequest"]:c1(),["DeliveryBusinessDayRangeRequest"]:c2(),["DeliveryEstimateRuleRequest"]:c3(),["DeliveryScheduleWindowRuleRequest"]:c4(),["DeliveryTransitTimeRuleRequest"]:c5(),["DeliveryWeeklyIntervalRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEstimateRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
