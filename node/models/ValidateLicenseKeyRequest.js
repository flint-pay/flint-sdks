import { d7906 as c0 } from '../descriptors/data/336.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7906 as d7906 } from '../descriptors/data/336.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7906;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ValidateLicenseKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeValidateLicenseKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
