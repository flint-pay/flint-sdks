import { d3907 as c0, d3910 as c1, d3911 as c2, d3912 as c3, d3913 as c4 } from '../descriptors/data/167.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3914 as c5, d3915 as c6, d3916 as c7, d3917 as c8, d3918 as c9, d3919 as c10, d3920 as c11, d3921 as c12, d3922 as c13, d3923 as c14, d3924 as c15, d3925 as c16, d3926 as c17, d3927 as c18 } from '../descriptors/data/168.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3907 as d3907 } from '../descriptors/data/167.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3907;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTarget"]:c0(),["SharedCodec1185"]:c1(),["SharedCodec1186"]:c2(),["SharedCodec1187"]:c3(),["SharedCodec1188"]:c4(),["SharedCodec1189"]:c5(),["SharedCodec1190"]:c6(),["SharedCodec1191"]:c7(),["SharedCodec1192"]:c8(),["SharedCodec1193"]:c9(),["SharedCodec1194"]:c10(),["SharedCodec1195"]:c11(),["SharedCodec1196"]:c12(),["SharedCodec1197"]:c13(),["SharedCodec1198"]:c14(),["SharedCodec1199"]:c15(),["SharedCodec1200"]:c16(),["SharedCodec1201"]:c17(),["SharedCodec1202"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
