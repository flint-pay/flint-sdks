import { d8049 as c0 } from '../descriptors/data/352.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8145 as c1 } from '../descriptors/data/358.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7763 as c2 } from '../descriptors/data/327.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7763 as d7763 } from '../descriptors/data/327.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7763;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3073"]:c0(),["SharedCodec3076"]:c1(),["UpdateLicenseKeyPoolRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLicenseKeyPoolRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
