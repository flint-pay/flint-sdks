import { d91 as c0 } from '../descriptors/data/3.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3294 as c1, d3295 as c2 } from '../descriptors/data/131.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d91 as d91 } from '../descriptors/data/3.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d91;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeSubscriptionPlanRequest"]:c0(),["SharedCodec47"]:c1(),["SharedCodec48"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
