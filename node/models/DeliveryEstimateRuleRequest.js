import { d3739 as c0, d3740 as c1, d3741 as c2 } from '../descriptors/data/158.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3664 as c3 } from '../descriptors/data/154.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3760 as c4, d3762 as c5, d3763 as c6 } from '../descriptors/data/159.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3664 as d3664 } from '../descriptors/data/154.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3664;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequestRequest"]:c0(),["DeliveryBlackoutIntervalRequestRequest"]:c1(),["DeliveryBusinessDayRangeRequestRequest"]:c2(),["DeliveryEstimateRuleRequest"]:c3(),["DeliveryScheduleWindowRuleRequest"]:c4(),["DeliveryTransitTimeRuleRequestRequest"]:c5(),["DeliveryWeeklyIntervalRequestRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryEstimateRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
