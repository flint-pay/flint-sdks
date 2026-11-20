import { d1176 as c0 } from '../descriptors/data/59.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d10373 as c1, d10374 as c2 } from '../descriptors/data/488.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1176 as d1176 } from '../descriptors/data/59.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1176;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LicenseKeyConfigurationRequest"]:c0(),["SharedCodec1745"]:c1(),["SharedCodec1746"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLicenseKeyConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
