import { d877 as c0 } from '../descriptors/data/38.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4403 as c1 } from '../descriptors/data/192.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d877 as d877 } from '../descriptors/data/38.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d877;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceForever"]:c0(),["SharedCodec1033"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceForever(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
