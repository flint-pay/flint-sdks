import { d4932 as c0 } from '../descriptors/data/224.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2481 as c1 } from '../descriptors/data/100.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d2481 as d2481 } from '../descriptors/data/100.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2481;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1226"]:c0(),["UpdateReturnReasonRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReasonRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
