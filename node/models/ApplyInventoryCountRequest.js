import { d23 as c0 } from '../descriptors/data/1.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d23 as d23 } from '../descriptors/data/1.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d23;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyInventoryCountRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
