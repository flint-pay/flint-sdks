import { d541 as c0, d2212 as c1, d2185 as c2, d2186 as c3, d2189 as c4, d2188 as c5, d2187 as c6, d2192 as c7, d2191 as c8, d2190 as c9, d2195 as c10, d2194 as c11, d2193 as c12, d2198 as c13, d2197 as c14, d2196 as c15, d2200 as c16, d2199 as c17, d2211 as c18, d2203 as c19, d2201 as c20, d2202 as c21, d2205 as c22, d2204 as c23, d2208 as c24, d2206 as c25, d2207 as c26, d2210 as c27, d2209 as c28 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d541 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d541;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec525"]:c2(),["SharedCodec526"]:c3(),["SharedCodec527"]:c4(),["SharedCodec528"]:c5(),["SharedCodec529"]:c6(),["SharedCodec530"]:c7(),["SharedCodec531"]:c8(),["SharedCodec532"]:c9(),["SharedCodec533"]:c10(),["SharedCodec534"]:c11(),["SharedCodec535"]:c12(),["SharedCodec536"]:c13(),["SharedCodec537"]:c14(),["SharedCodec538"]:c15(),["SharedCodec539"]:c16(),["SharedCodec540"]:c17(),["SharedCodec541"]:c18(),["SharedCodec542"]:c19(),["SharedCodec543"]:c20(),["SharedCodec544"]:c21(),["SharedCodec545"]:c22(),["SharedCodec546"]:c23(),["SharedCodec547"]:c24(),["SharedCodec548"]:c25(),["SharedCodec549"]:c26(),["SharedCodec550"]:c27(),["SharedCodec551"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
