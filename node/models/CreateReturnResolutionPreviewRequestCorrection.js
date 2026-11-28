import { d395 as c0 } from '../descriptors/data/24.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c1 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10740 as c2, d10742 as c5, d10743 as c6 } from '../descriptors/data/510.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10755 as c3, d10756 as c4 } from '../descriptors/data/511.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9808 as c7 } from '../descriptors/data/454.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d395 as d395 } from '../descriptors/data/24.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d395;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequestCorrection"]:c0(),["MoneyValue"]:c1(),["ReturnResolutionAdjustmentRequest"]:c2(),["SharedCodec565"]:c3(),["SharedCodec566"]:c4(),["SharedCodec570"]:c5(),["SharedCodec571"]:c6(),["SharedCodec99"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequestCorrection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
