import { d779 as c0 } from '../descriptors/data/33.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d779 as d779 } from '../descriptors/data/33.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d779;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionRefreshRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionRefreshRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
