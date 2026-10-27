import { d4069 as c0 } from '../descriptors/data/173.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3997 as c1, d3998 as c3, d3999 as c4, d4000 as c5, d3996 as c6, d3993 as c7, d3994 as c8, d3995 as c9 } from '../descriptors/data/169.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d705 as c2 } from '../descriptors/data/30.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4099 as c10, d4100 as c11, d4101 as c12, d4102 as c13, d4103 as c14, d4104 as c15 } from '../descriptors/data/174.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d705 as d705 } from '../descriptors/data/30.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d705;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["InventoryTransferTransitionRequestReceive"]:c2(),["SharedCodec142"]:c3(),["SharedCodec143"]:c4(),["SharedCodec144"]:c5(),["SharedCodec145"]:c6(),["SharedCodec832"]:c7(),["SharedCodec833"]:c8(),["SharedCodec834"]:c9(),["SharedCodec865"]:c10(),["SharedCodec866"]:c11(),["SharedCodec867"]:c12(),["SharedCodec868"]:c13(),["SharedCodec869"]:c14(),["SharedCodec870"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryTransferTransitionRequestReceive(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
