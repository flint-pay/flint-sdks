import { d10677 as c0 } from '../descriptors/data/505.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10680 as c1, d10681 as c2, d10682 as c3 } from '../descriptors/data/506.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9239 as c4 } from '../descriptors/data/419.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10677 as d10677 } from '../descriptors/data/505.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10677;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnSourceSystemRequest"]:c0(),["SharedCodec2715"]:c1(),["SharedCodec2716"]:c2(),["SharedCodec2717"]:c3(),["SharedCodec462"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnSourceSystemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
