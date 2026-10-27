import { d149 as c0 } from '../descriptors/data/6.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d149 as d149 } from '../descriptors/data/6.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d149;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateFileRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateFileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
