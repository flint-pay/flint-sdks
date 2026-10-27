import { d4965 as c0 } from '../descriptors/data/226.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4977 as c1, d4978 as c2 } from '../descriptors/data/228.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4965 as d4965 } from '../descriptors/data/226.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4965;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineDecision"]:c0(),["SharedCodec1078"]:c1(),["SharedCodec1079"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
