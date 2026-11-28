import { d8068 as c0, d8069 as c1, d8082 as c2, d8083 as c4, d8084 as c5 } from '../descriptors/data/353.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8058 as c3 } from '../descriptors/data/352.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7820 as c6 } from '../descriptors/data/330.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d7820 as d7820 } from '../descriptors/data/330.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7820;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3124"]:c0(),["SharedCodec3125"]:c1(),["SharedCodec346"]:c2(),["SharedCodec5"]:c3(),["SharedCodec585"]:c4(),["SharedCodec586"]:c5(),["UpdateAPIKeyRequest"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
