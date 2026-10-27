import { d125 as c0 } from '../descriptors/data/5.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d125 as d125 } from '../descriptors/data/5.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d125;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomDomainRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomDomainRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
