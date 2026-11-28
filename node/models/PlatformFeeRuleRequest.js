import { d8003 as c0 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8343 as c1 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8224 as c2 } from '../descriptors/data/363.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8343 as d8343 } from '../descriptors/data/370.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8343;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PlatformFeeRuleRequest"]:c1(),["SharedCodec2393"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePlatformFeeRuleRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
