import { d2238 as c0, d2185 as c1, d2186 as c2, d2189 as c3, d2188 as c4, d2187 as c5, d2192 as c6, d2191 as c7, d2190 as c8, d2195 as c9, d2194 as c10, d2193 as c11, d2198 as c12, d2197 as c13, d2196 as c14, d2200 as c15, d2199 as c16, d2211 as c17, d2203 as c18, d2201 as c19, d2202 as c20, d2205 as c21, d2204 as c22, d2208 as c23, d2206 as c24, d2207 as c25, d2210 as c26, d2209 as c27 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d2238 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2238;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessDecision"]:c0(),["SharedCodec525"]:c1(),["SharedCodec526"]:c2(),["SharedCodec527"]:c3(),["SharedCodec528"]:c4(),["SharedCodec529"]:c5(),["SharedCodec530"]:c6(),["SharedCodec531"]:c7(),["SharedCodec532"]:c8(),["SharedCodec533"]:c9(),["SharedCodec534"]:c10(),["SharedCodec535"]:c11(),["SharedCodec536"]:c12(),["SharedCodec537"]:c13(),["SharedCodec538"]:c14(),["SharedCodec539"]:c15(),["SharedCodec540"]:c16(),["SharedCodec541"]:c17(),["SharedCodec542"]:c18(),["SharedCodec543"]:c19(),["SharedCodec544"]:c20(),["SharedCodec545"]:c21(),["SharedCodec546"]:c22(),["SharedCodec547"]:c23(),["SharedCodec548"]:c24(),["SharedCodec549"]:c25(),["SharedCodec550"]:c26(),["SharedCodec551"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
