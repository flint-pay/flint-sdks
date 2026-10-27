import { d878 as c0 } from '../descriptors/data/38.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4400 as c1 } from '../descriptors/data/192.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d878 as d878 } from '../descriptors/data/38.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d878;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceOnce"]:c0(),["SharedCodec1030"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceOnce(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
