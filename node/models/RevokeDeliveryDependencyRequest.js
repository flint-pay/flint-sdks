import { d920 as c0 } from '../descriptors/data/40.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3677 as c1 } from '../descriptors/data/151.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3678 as c2, d3679 as c3, d3680 as c4, d3681 as c5, d3682 as c6, d3683 as c7, d3684 as c8, d3685 as c9, d3686 as c10, d3687 as c11, d3688 as c12, d3689 as c13, d3690 as c14, d3691 as c15, d3692 as c16, d3693 as c17, d3694 as c18, d3695 as c19 } from '../descriptors/data/152.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3706 as c20, d3712 as c21 } from '../descriptors/data/153.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d920 as d920 } from '../descriptors/data/40.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d920;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyRequest"]:c0(),["RevokeDeliveryDependencyTarget"]:c1(),["SharedCodec1101"]:c2(),["SharedCodec1102"]:c3(),["SharedCodec1103"]:c4(),["SharedCodec1104"]:c5(),["SharedCodec1105"]:c6(),["SharedCodec1106"]:c7(),["SharedCodec1107"]:c8(),["SharedCodec1108"]:c9(),["SharedCodec1109"]:c10(),["SharedCodec1110"]:c11(),["SharedCodec1111"]:c12(),["SharedCodec1112"]:c13(),["SharedCodec1113"]:c14(),["SharedCodec1114"]:c15(),["SharedCodec1115"]:c16(),["SharedCodec1116"]:c17(),["SharedCodec1117"]:c18(),["SharedCodec1118"]:c19(),["SharedCodec317"]:c20(),["SharedCodec323"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
