import { d694 as c0 } from '../descriptors/data/30.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4076 as c1, d4077 as c2 } from '../descriptors/data/173.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d694 as d694 } from '../descriptors/data/30.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d694;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationTransitionRequestCommit"]:c0(),["SharedCodec851"]:c1(),["SharedCodec852"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestCommit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
