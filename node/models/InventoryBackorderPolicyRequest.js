import { d9270 as c0 } from '../descriptors/data/421.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9270 as d9270 } from '../descriptors/data/421.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9270;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryBackorderPolicyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryBackorderPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
