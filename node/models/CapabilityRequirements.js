import { d128 as c0 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d128 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d128;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CapabilityRequirements"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapabilityRequirements(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
