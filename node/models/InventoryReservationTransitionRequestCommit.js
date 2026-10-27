import { d691 as c0 } from '../descriptors/data/29.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4061 as c1, d4062 as c2 } from '../descriptors/data/172.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d691 as d691 } from '../descriptors/data/29.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryReservationTransitionRequestCommit"]:c0(),["SharedCodec846"]:c1(),["SharedCodec847"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestCommit(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
