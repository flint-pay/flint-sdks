import { d2228 as c0, d2201 as c1, d2202 as c2, d2205 as c3, d2204 as c4, d2203 as c5, d2208 as c6, d2207 as c7, d2206 as c8, d2211 as c9, d2210 as c10, d2209 as c11, d2214 as c12, d2213 as c13, d2212 as c14, d2216 as c15, d2215 as c16, d2227 as c17, d2219 as c18, d2217 as c19, d2218 as c20, d2221 as c21, d2220 as c22, d2224 as c23, d2222 as c24, d2223 as c25, d2226 as c26, d2225 as c27 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d2228 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2228;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineDecision"]:c0(),["SharedCodec530"]:c1(),["SharedCodec531"]:c2(),["SharedCodec532"]:c3(),["SharedCodec533"]:c4(),["SharedCodec534"]:c5(),["SharedCodec535"]:c6(),["SharedCodec536"]:c7(),["SharedCodec537"]:c8(),["SharedCodec538"]:c9(),["SharedCodec539"]:c10(),["SharedCodec540"]:c11(),["SharedCodec541"]:c12(),["SharedCodec542"]:c13(),["SharedCodec543"]:c14(),["SharedCodec544"]:c15(),["SharedCodec545"]:c16(),["SharedCodec546"]:c17(),["SharedCodec547"]:c18(),["SharedCodec548"]:c19(),["SharedCodec549"]:c20(),["SharedCodec550"]:c21(),["SharedCodec551"]:c22(),["SharedCodec552"]:c23(),["SharedCodec553"]:c24(),["SharedCodec554"]:c25(),["SharedCodec555"]:c26(),["SharedCodec556"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
