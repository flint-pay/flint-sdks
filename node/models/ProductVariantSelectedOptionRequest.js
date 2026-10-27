import { d4739 as c0 } from '../descriptors/data/212.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4739 as d4739 } from '../descriptors/data/212.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4739;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ProductVariantSelectedOptionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProductVariantSelectedOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
