import { d678 as c0 } from '../descriptors/data/29.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d678 as d678 } from '../descriptors/data/29.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d678;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountTransitionRequestCancel"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountTransitionRequestCancel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
