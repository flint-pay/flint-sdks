import { d3692 as c0 } from '../descriptors/data/152.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3695 as c1, d3696 as c2, d3697 as c3, d3698 as c4, d3699 as c5, d3700 as c6, d3701 as c7, d3702 as c8, d3703 as c9, d3704 as c10, d3705 as c11, d3706 as c12, d3707 as c13, d3708 as c14, d3709 as c15, d3710 as c16 } from '../descriptors/data/153.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3721 as c17, d3727 as c18 } from '../descriptors/data/154.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3692 as d3692 } from '../descriptors/data/152.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3692;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTarget"]:c0(),["SharedCodec1114"]:c1(),["SharedCodec1115"]:c2(),["SharedCodec1116"]:c3(),["SharedCodec1117"]:c4(),["SharedCodec1118"]:c5(),["SharedCodec1119"]:c6(),["SharedCodec1120"]:c7(),["SharedCodec1121"]:c8(),["SharedCodec1122"]:c9(),["SharedCodec1123"]:c10(),["SharedCodec1124"]:c11(),["SharedCodec1125"]:c12(),["SharedCodec1126"]:c13(),["SharedCodec1127"]:c14(),["SharedCodec1128"]:c15(),["SharedCodec1129"]:c16(),["SharedCodec322"]:c17(),["SharedCodec328"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
