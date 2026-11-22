import { d8589 as c0, d8590 as c1 } from '../descriptors/data/382.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8611 as c2, d8614 as c3 } from '../descriptors/data/383.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8611 as d8611 } from '../descriptors/data/383.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8611;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryAvailabilityRequest"]:c0(),["DeliveryBlackoutIntervalRequest"]:c1(),["DeliveryScheduleWindowRuleRequest"]:c2(),["DeliveryWeeklyIntervalRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryScheduleWindowRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
