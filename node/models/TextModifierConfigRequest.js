import { d4489 as c0 } from '../descriptors/data/197.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4489 as d4489 } from '../descriptors/data/197.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4489;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TextModifierConfigRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTextModifierConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
