import { d1266 as c0 } from '../descriptors/data/59.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5119 as c1, d5120 as c2, d5121 as c3, d5122 as c4, d5123 as c5, d5124 as c6, d5125 as c7, d5126 as c8, d5127 as c9 } from '../descriptors/data/227.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5128 as c10, d5129 as c11, d5130 as c12, d5131 as c13, d5132 as c14, d5133 as c15, d5134 as c16, d5135 as c17, d5136 as c18 } from '../descriptors/data/228.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d1266 as d1266 } from '../descriptors/data/59.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1266;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTarget"]:c0(),["SharedCodec1220"]:c1(),["SharedCodec1221"]:c2(),["SharedCodec1222"]:c3(),["SharedCodec1223"]:c4(),["SharedCodec1224"]:c5(),["SharedCodec1225"]:c6(),["SharedCodec1226"]:c7(),["SharedCodec1227"]:c8(),["SharedCodec1228"]:c9(),["SharedCodec1229"]:c10(),["SharedCodec1230"]:c11(),["SharedCodec1231"]:c12(),["SharedCodec1232"]:c13(),["SharedCodec1233"]:c14(),["SharedCodec1234"]:c15(),["SharedCodec1235"]:c16(),["SharedCodec1236"]:c17(),["SharedCodec1237"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
