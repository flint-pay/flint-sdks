import { d3739 as c0, d3740 as c1 } from '../descriptors/data/158.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3760 as c2, d3763 as c3 } from '../descriptors/data/159.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3760 as d3760 } from '../descriptors/data/159.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3760;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequestRequest"]:c0(),["DeliveryBlackoutIntervalRequestRequest"]:c1(),["DeliveryScheduleWindowRuleRequest"]:c2(),["DeliveryWeeklyIntervalRequestRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryScheduleWindowRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
