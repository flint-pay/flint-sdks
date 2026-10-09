import { d215 as c0, d214 as c1, d213 as c2 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d215 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d215;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CommitInventoryReservationRequest"]:c0(),["SharedCodec38"]:c1(),["SharedCodec39"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCommitInventoryReservationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
