import { d4064 as c0 } from '../descriptors/data/173.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4064 as d4064 } from '../descriptors/data/173.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4064;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationOwnerRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationOwnerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
