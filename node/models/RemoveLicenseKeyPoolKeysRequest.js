import { d1756 as c0 } from '../descriptors/data/87.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9515 as c1, d9516 as c2, d9517 as c3 } from '../descriptors/data/433.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1756 as d1756 } from '../descriptors/data/87.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1756;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RemoveLicenseKeyPoolKeysRequest"]:c0(),["SharedCodec2617"]:c1(),["SharedCodec2618"]:c2(),["SharedCodec2619"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRemoveLicenseKeyPoolKeysRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
