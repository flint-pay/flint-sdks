import { d764 as c0, d763 as c1 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d764 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ErrorResourceReference"]:c0(),["SharedCodec225"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeErrorResourceReference(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
