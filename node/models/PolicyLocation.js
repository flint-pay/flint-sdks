import { d2037 as c0 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2037 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2037;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PolicyLocation"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePolicyLocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
