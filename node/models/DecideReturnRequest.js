import { d551 as c0, d2228 as c1, d2201 as c2, d2202 as c3, d2205 as c4, d2204 as c5, d2203 as c6, d2208 as c7, d2207 as c8, d2206 as c9, d2211 as c10, d2210 as c11, d2209 as c12, d2214 as c13, d2213 as c14, d2212 as c15, d2216 as c16, d2215 as c17, d2227 as c18, d2219 as c19, d2217 as c20, d2218 as c21, d2221 as c22, d2220 as c23, d2224 as c24, d2222 as c25, d2223 as c26, d2226 as c27, d2225 as c28 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d551 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d551;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec530"]:c2(),["SharedCodec531"]:c3(),["SharedCodec532"]:c4(),["SharedCodec533"]:c5(),["SharedCodec534"]:c6(),["SharedCodec535"]:c7(),["SharedCodec536"]:c8(),["SharedCodec537"]:c9(),["SharedCodec538"]:c10(),["SharedCodec539"]:c11(),["SharedCodec540"]:c12(),["SharedCodec541"]:c13(),["SharedCodec542"]:c14(),["SharedCodec543"]:c15(),["SharedCodec544"]:c16(),["SharedCodec545"]:c17(),["SharedCodec546"]:c18(),["SharedCodec547"]:c19(),["SharedCodec548"]:c20(),["SharedCodec549"]:c21(),["SharedCodec550"]:c22(),["SharedCodec551"]:c23(),["SharedCodec552"]:c24(),["SharedCodec553"]:c25(),["SharedCodec554"]:c26(),["SharedCodec555"]:c27(),["SharedCodec556"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
