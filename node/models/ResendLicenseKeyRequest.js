import { d1764 as c0 } from '../descriptors/data/87.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1764 as d1764 } from '../descriptors/data/87.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ResendLicenseKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResendLicenseKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
