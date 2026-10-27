import { d2449 as c0 } from '../descriptors/data/98.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2449 as d2449 } from '../descriptors/data/98.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2449;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateInventoryReservationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
