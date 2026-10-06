import { d186 as c0, d187 as c1 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d186 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d186;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextConfig"]:c0(),["CheckoutCustomTextWriteConfig"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutCustomTextConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
