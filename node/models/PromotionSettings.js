import { d5083 as c0 } from '../descriptors/data/233.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d5083 as d5083 } from '../descriptors/data/233.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5083;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionSettings"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionSettings(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
