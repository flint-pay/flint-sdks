import { d1011 as c0 } from '../descriptors/data/49.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3907 as c1, d3908 as c2, d3909 as c3, d3910 as c4, d3911 as c5, d3912 as c6, d3913 as c7 } from '../descriptors/data/167.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3914 as c8, d3915 as c9, d3916 as c10, d3917 as c11, d3918 as c12, d3919 as c13, d3920 as c14, d3921 as c15, d3922 as c16, d3923 as c17, d3924 as c18, d3925 as c19, d3926 as c20, d3927 as c21 } from '../descriptors/data/168.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d1011 as d1011 } from '../descriptors/data/49.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1011;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyRequest"]:c0(),["RevokeDeliveryDependencyTarget"]:c1(),["SharedCodec1183"]:c2(),["SharedCodec1184"]:c3(),["SharedCodec1185"]:c4(),["SharedCodec1186"]:c5(),["SharedCodec1187"]:c6(),["SharedCodec1188"]:c7(),["SharedCodec1189"]:c8(),["SharedCodec1190"]:c9(),["SharedCodec1191"]:c10(),["SharedCodec1192"]:c11(),["SharedCodec1193"]:c12(),["SharedCodec1194"]:c13(),["SharedCodec1195"]:c14(),["SharedCodec1196"]:c15(),["SharedCodec1197"]:c16(),["SharedCodec1198"]:c17(),["SharedCodec1199"]:c18(),["SharedCodec1200"]:c19(),["SharedCodec1201"]:c20(),["SharedCodec1202"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
