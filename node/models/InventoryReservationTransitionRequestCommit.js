import { d694 as c0 } from '../descriptors/data/30.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4076 as c1, d4077 as c2 } from '../descriptors/data/173.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d694 as d694 } from '../descriptors/data/30.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d694;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationTransitionRequestCommit"]:c0(),["SharedCodec851"]:c1(),["SharedCodec852"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestCommit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
