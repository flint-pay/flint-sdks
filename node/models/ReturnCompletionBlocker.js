import { d2164 as c0 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2164 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2164;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnCompletionBlocker"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnCompletionBlocker(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
