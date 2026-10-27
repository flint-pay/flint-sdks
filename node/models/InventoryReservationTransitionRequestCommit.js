import { d694 as c0 } from '../descriptors/data/30.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4076 as c1, d4077 as c2 } from '../descriptors/data/173.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d694 as d694 } from '../descriptors/data/30.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d694;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationTransitionRequestCommit"]:c0(),["SharedCodec851"]:c1(),["SharedCodec852"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestCommit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
