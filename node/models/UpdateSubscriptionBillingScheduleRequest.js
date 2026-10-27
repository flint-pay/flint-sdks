import { d5176 as c0, d5177 as c1 } from '../descriptors/data/238.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2494 as c2 } from '../descriptors/data/101.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2494 as d2494 } from '../descriptors/data/101.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2494;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1247"]:c0(),["SharedCodec1248"]:c1(),["UpdateSubscriptionBillingScheduleRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionBillingScheduleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
