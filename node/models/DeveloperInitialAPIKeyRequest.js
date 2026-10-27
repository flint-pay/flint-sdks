import { d346 as c0 } from '../descriptors/data/19.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d346 as d346 } from '../descriptors/data/19.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperInitialAPIKeyRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperInitialAPIKeyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
