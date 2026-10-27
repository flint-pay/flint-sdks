import { d3677 as c0 } from '../descriptors/data/151.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3680 as c1, d3681 as c2, d3682 as c3, d3683 as c4, d3684 as c5, d3685 as c6, d3686 as c7, d3687 as c8, d3688 as c9, d3689 as c10, d3690 as c11, d3691 as c12, d3692 as c13, d3693 as c14, d3694 as c15, d3695 as c16 } from '../descriptors/data/152.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3706 as c17, d3712 as c18 } from '../descriptors/data/153.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3677 as d3677 } from '../descriptors/data/151.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3677;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTarget"]:c0(),["SharedCodec1103"]:c1(),["SharedCodec1104"]:c2(),["SharedCodec1105"]:c3(),["SharedCodec1106"]:c4(),["SharedCodec1107"]:c5(),["SharedCodec1108"]:c6(),["SharedCodec1109"]:c7(),["SharedCodec1110"]:c8(),["SharedCodec1111"]:c9(),["SharedCodec1112"]:c10(),["SharedCodec1113"]:c11(),["SharedCodec1114"]:c12(),["SharedCodec1115"]:c13(),["SharedCodec1116"]:c14(),["SharedCodec1117"]:c15(),["SharedCodec1118"]:c16(),["SharedCodec317"]:c17(),["SharedCodec323"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
