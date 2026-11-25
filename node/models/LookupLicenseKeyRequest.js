import { d1226 as c0 } from '../descriptors/data/61.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d1226 as d1226 } from '../descriptors/data/61.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1226;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LookupLicenseKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLookupLicenseKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
