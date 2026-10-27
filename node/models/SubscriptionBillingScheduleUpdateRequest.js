import { d5172 as c0, d5173 as c1 } from '../descriptors/data/238.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5194 as c2 } from '../descriptors/data/239.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d5194 as d5194 } from '../descriptors/data/239.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5194;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1142"]:c0(),["SharedCodec1143"]:c1(),["SubscriptionBillingScheduleUpdateRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionBillingScheduleUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
