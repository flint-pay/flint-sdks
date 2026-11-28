import { d1178 as c0 } from '../descriptors/data/60.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10473 as c1, d10474 as c2 } from '../descriptors/data/493.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1178 as d1178 } from '../descriptors/data/60.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1178;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LicenseKeyConfigurationRequest"]:c0(),["SharedCodec1775"]:c1(),["SharedCodec1776"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLicenseKeyConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
