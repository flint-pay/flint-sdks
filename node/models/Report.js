import { d2101 as c0, d2161 as c1, d1536 as c2, d1535 as c3, d1537 as c4, d1538 as c5 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2161 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2161;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PublicDownload"]:c0(),["Report"]:c1(),["SharedCodec386"]:c2(),["SharedCodec387"]:c3(),["SharedCodec388"]:c4(),["SharedCodec389"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReport(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
