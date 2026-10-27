import { d696 as c0 } from '../descriptors/data/30.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4082 as c1, d4083 as c2 } from '../descriptors/data/173.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d696 as d696 } from '../descriptors/data/30.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d696;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationTransitionRequestRelease"]:c0(),["SharedCodec857"]:c1(),["SharedCodec858"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestRelease(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
