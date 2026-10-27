import { d4069 as c0 } from '../descriptors/data/173.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d690 as c1 } from '../descriptors/data/29.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3997 as c2, d3998 as c3, d3999 as c4, d4000 as c5, d3996 as c6, d3993 as c7, d3994 as c8, d3995 as c9 } from '../descriptors/data/169.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4060 as c10, d4061 as c11, d4062 as c12, d4063 as c13, d4064 as c14, d4065 as c15, d4066 as c16, d4067 as c17, d4068 as c18 } from '../descriptors/data/172.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d690 as d690 } from '../descriptors/data/29.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d690;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventoryReservationTransitionRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec142"]:c3(),["SharedCodec143"]:c4(),["SharedCodec144"]:c5(),["SharedCodec145"]:c6(),["SharedCodec832"]:c7(),["SharedCodec833"]:c8(),["SharedCodec834"]:c9(),["SharedCodec845"]:c10(),["SharedCodec846"]:c11(),["SharedCodec847"]:c12(),["SharedCodec848"]:c13(),["SharedCodec849"]:c14(),["SharedCodec850"]:c15(),["SharedCodec851"]:c16(),["SharedCodec852"]:c17(),["SharedCodec853"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
