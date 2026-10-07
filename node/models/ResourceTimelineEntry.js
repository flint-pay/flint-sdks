import { d2109 as c0, d20 as c1, d879 as c2 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2109 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResourceTimelineEntry"]:c0(),["SharedCodec2"]:c1(),["SharedCodec242"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResourceTimelineEntry(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
