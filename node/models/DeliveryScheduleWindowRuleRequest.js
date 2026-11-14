import { d6435 as c0, d6436 as c1 } from '../descriptors/data/297.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6457 as c2, d6460 as c3 } from '../descriptors/data/298.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6457 as d6457 } from '../descriptors/data/298.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6457;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequest"]:c0(),["DeliveryBlackoutIntervalRequest"]:c1(),["DeliveryScheduleWindowRuleRequest"]:c2(),["DeliveryWeeklyIntervalRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryScheduleWindowRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
