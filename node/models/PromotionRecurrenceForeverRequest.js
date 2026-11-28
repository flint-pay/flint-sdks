import { d1677 as c0 } from '../descriptors/data/84.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9785 as c1 } from '../descriptors/data/453.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1677 as d1677 } from '../descriptors/data/84.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1677;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRecurrenceForeverRequest"]:c0(),["SharedCodec2468"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRecurrenceForeverRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
