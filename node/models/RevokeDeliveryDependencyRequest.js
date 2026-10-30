import { d1265 as c0, d1266 as c1 } from '../descriptors/data/59.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5117 as c2, d5118 as c3, d5119 as c4, d5120 as c5, d5121 as c6, d5122 as c7, d5123 as c8, d5124 as c9, d5125 as c10, d5126 as c11, d5127 as c12 } from '../descriptors/data/227.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5128 as c13, d5129 as c14, d5130 as c15, d5131 as c16, d5132 as c17, d5133 as c18, d5134 as c19, d5135 as c20, d5136 as c21 } from '../descriptors/data/228.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1265 as d1265 } from '../descriptors/data/59.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyRequest"]:c0(),["RevokeDeliveryDependencyTarget"]:c1(),["SharedCodec1218"]:c2(),["SharedCodec1219"]:c3(),["SharedCodec1220"]:c4(),["SharedCodec1221"]:c5(),["SharedCodec1222"]:c6(),["SharedCodec1223"]:c7(),["SharedCodec1224"]:c8(),["SharedCodec1225"]:c9(),["SharedCodec1226"]:c10(),["SharedCodec1227"]:c11(),["SharedCodec1228"]:c12(),["SharedCodec1229"]:c13(),["SharedCodec1230"]:c14(),["SharedCodec1231"]:c15(),["SharedCodec1232"]:c16(),["SharedCodec1233"]:c17(),["SharedCodec1234"]:c18(),["SharedCodec1235"]:c19(),["SharedCodec1236"]:c20(),["SharedCodec1237"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
