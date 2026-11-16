import { d8383 as c0, d8384 as c1 } from '../descriptors/data/368.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8405 as c2, d8408 as c3 } from '../descriptors/data/369.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8405 as d8405 } from '../descriptors/data/369.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8405;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequest"]:c0(),["DeliveryBlackoutIntervalRequest"]:c1(),["DeliveryScheduleWindowRuleRequest"]:c2(),["DeliveryWeeklyIntervalRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryScheduleWindowRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
