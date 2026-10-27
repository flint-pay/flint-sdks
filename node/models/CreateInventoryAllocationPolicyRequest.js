import { d171 as c0 } from '../descriptors/data/8.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4016 as c1, d4018 as c2 } from '../descriptors/data/170.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d171 as d171 } from '../descriptors/data/8.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d171;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAllocationPolicyRequest"]:c0(),["InventoryAllocationConfigurationValue"]:c1(),["InventoryAllocationPolicyLocation"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAllocationPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
