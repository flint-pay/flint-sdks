import { d4030 as c0 } from '../descriptors/data/171.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4030 as d4030 } from '../descriptors/data/171.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4030;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountObservationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountObservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
