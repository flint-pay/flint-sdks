import { d2034 as c0, d2094 as c1, d1489 as c2, d1488 as c3, d1490 as c4, d1491 as c5 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2094 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2094;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicDownload"]:c0(),["Report"]:c1(),["SharedCodec367"]:c2(),["SharedCodec368"]:c3(),["SharedCodec369"]:c4(),["SharedCodec370"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
