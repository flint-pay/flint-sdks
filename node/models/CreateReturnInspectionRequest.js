import { d380 as c0 } from '../descriptors/data/23.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10664 as c1, d10677 as c2, d10665 as c6, d10666 as c7, d10667 as c8 } from '../descriptors/data/505.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10680 as c3, d10681 as c4, d10682 as c5 } from '../descriptors/data/506.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9239 as c9 } from '../descriptors/data/419.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d380 as d380 } from '../descriptors/data/23.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d380;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnInspectionRequest"]:c0(),["ReturnInspectionLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["SharedCodec2715"]:c3(),["SharedCodec2716"]:c4(),["SharedCodec2717"]:c5(),["SharedCodec2734"]:c6(),["SharedCodec2735"]:c7(),["SharedCodec2736"]:c8(),["SharedCodec462"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnInspectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
