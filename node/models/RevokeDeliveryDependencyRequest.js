import { d930 as c0 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3692 as c1 } from '../descriptors/data/152.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3693 as c2, d3694 as c3, d3695 as c4, d3696 as c5, d3697 as c6, d3698 as c7, d3699 as c8, d3700 as c9, d3701 as c10, d3702 as c11, d3703 as c12, d3704 as c13, d3705 as c14, d3706 as c15, d3707 as c16, d3708 as c17, d3709 as c18, d3710 as c19 } from '../descriptors/data/153.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3721 as c20, d3727 as c21 } from '../descriptors/data/154.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d930 as d930 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d930;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyRequest"]:c0(),["RevokeDeliveryDependencyTarget"]:c1(),["SharedCodec1112"]:c2(),["SharedCodec1113"]:c3(),["SharedCodec1114"]:c4(),["SharedCodec1115"]:c5(),["SharedCodec1116"]:c6(),["SharedCodec1117"]:c7(),["SharedCodec1118"]:c8(),["SharedCodec1119"]:c9(),["SharedCodec1120"]:c10(),["SharedCodec1121"]:c11(),["SharedCodec1122"]:c12(),["SharedCodec1123"]:c13(),["SharedCodec1124"]:c14(),["SharedCodec1125"]:c15(),["SharedCodec1126"]:c16(),["SharedCodec1127"]:c17(),["SharedCodec1128"]:c18(),["SharedCodec1129"]:c19(),["SharedCodec322"]:c20(),["SharedCodec328"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
