import { d1822 as c0 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d1822 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1822;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["NextActionMerchantAccountSession"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeNextActionMerchantAccountSession(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
