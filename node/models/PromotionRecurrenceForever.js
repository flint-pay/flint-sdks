import { d877 as c0 } from '../descriptors/data/38.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4403 as c1 } from '../descriptors/data/192.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d877 as d877 } from '../descriptors/data/38.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d877;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceForever"]:c0(),["SharedCodec1033"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceForever(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
