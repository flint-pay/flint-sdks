import { d879 as c0 } from '../descriptors/data/38.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d879 as d879 } from '../descriptors/data/38.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d879;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceRepeating"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceRepeating(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
