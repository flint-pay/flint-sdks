import { d4016 as c0, d4018 as c1 } from '../descriptors/data/170.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4016 as d4016 } from '../descriptors/data/170.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4016;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationConfigurationValue"]:c0(),["InventoryAllocationPolicyLocation"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationConfigurationValue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
