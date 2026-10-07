import { d2164 as c0, d2166 as c1, d2178 as c2, d2179 as c3, d2176 as c4, d2177 as c5 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2178 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2178;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnActor"]:c0(),["ReturnDisposition"]:c1(),["ReturnInspection"]:c2(),["ReturnInspectionLineItem"]:c3(),["ReturnSourceSystem"]:c4(),["SharedCodec548"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInspection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
