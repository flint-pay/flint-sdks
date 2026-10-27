import { d2496 as c0 } from '../descriptors/data/101.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2496 as d2496 } from '../descriptors/data/101.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2496;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateSubscriptionBillingScheduleRequestFlint"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionBillingScheduleRequestFlint(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
