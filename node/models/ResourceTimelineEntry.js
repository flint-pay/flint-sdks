import { d2159 as c0, d20 as c1, d900 as c2 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2159 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResourceTimelineEntry"]:c0(),["SharedCodec2"]:c1(),["SharedCodec251"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimelineEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
