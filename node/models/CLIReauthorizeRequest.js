import { d134 as c0 } from '../descriptors/data/7.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9955 as c1 } from '../descriptors/data/462.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d134 as d134 } from '../descriptors/data/7.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d134;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CLIReauthorizeRequest"]:c0(),["SharedCodec330"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCLIReauthorizeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
