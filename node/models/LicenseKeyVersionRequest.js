import { d1204 as c0 } from '../descriptors/data/60.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1204 as d1204 } from '../descriptors/data/60.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1204;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LicenseKeyVersionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLicenseKeyVersionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
