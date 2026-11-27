import { d8132 as c0 } from '../descriptors/data/357.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8234 as c1 } from '../descriptors/data/364.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10134 as c2, d10135 as c3, d10136 as c4, d10137 as c5 } from '../descriptors/data/472.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7859 as c6 } from '../descriptors/data/333.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7859 as d7859 } from '../descriptors/data/333.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7859;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3128"]:c0(),["SharedCodec3131"]:c1(),["SharedCodec3198"]:c2(),["SharedCodec3199"]:c3(),["SharedCodec3200"]:c4(),["SharedCodec3201"]:c5(),["UpdatePackageRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
