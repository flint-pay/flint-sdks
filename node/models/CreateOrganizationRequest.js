import { d187 as c0 } from '../descriptors/data/9.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d187 as d187 } from '../descriptors/data/9.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d187;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrganizationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrganizationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
