import { d1837 as c0 } from '../descriptors/data/92.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10710 as c1 } from '../descriptors/data/508.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1837 as d1837 } from '../descriptors/data/92.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1837;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeAllRequest"]:c0(),["SharedCodec2785"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeAllRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
