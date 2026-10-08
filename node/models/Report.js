import { d2083 as c0, d2144 as c1, d1534 as c2, d1533 as c3, d1535 as c4, d1536 as c5 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d2144 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2144;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicDownload"]:c0(),["Report"]:c1(),["SharedCodec385"]:c2(),["SharedCodec386"]:c3(),["SharedCodec387"]:c4(),["SharedCodec388"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
