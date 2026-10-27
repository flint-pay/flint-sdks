import { d4069 as c0 } from '../descriptors/data/173.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d692 as c1 } from '../descriptors/data/29.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3997 as c2, d3998 as c3, d3999 as c4, d4000 as c5, d3996 as c6, d3993 as c7, d3994 as c8, d3995 as c9 } from '../descriptors/data/169.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4064 as c10, d4065 as c11 } from '../descriptors/data/172.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d692 as d692 } from '../descriptors/data/29.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d692;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventoryReservationTransitionRequestConsume"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec142"]:c3(),["SharedCodec143"]:c4(),["SharedCodec144"]:c5(),["SharedCodec145"]:c6(),["SharedCodec832"]:c7(),["SharedCodec833"]:c8(),["SharedCodec834"]:c9(),["SharedCodec849"]:c10(),["SharedCodec850"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestConsume(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
