import { d2195 as c0, d2142 as c1, d2143 as c2, d2146 as c3, d2145 as c4, d2144 as c5, d2149 as c6, d2148 as c7, d2147 as c8, d2152 as c9, d2151 as c10, d2150 as c11, d2155 as c12, d2154 as c13, d2153 as c14, d2157 as c15, d2156 as c16, d2168 as c17, d2160 as c18, d2158 as c19, d2159 as c20, d2162 as c21, d2161 as c22, d2165 as c23, d2163 as c24, d2164 as c25, d2167 as c26, d2166 as c27 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d2195 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2195;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessDecision"]:c0(),["SharedCodec535"]:c1(),["SharedCodec536"]:c2(),["SharedCodec537"]:c3(),["SharedCodec538"]:c4(),["SharedCodec539"]:c5(),["SharedCodec540"]:c6(),["SharedCodec541"]:c7(),["SharedCodec542"]:c8(),["SharedCodec543"]:c9(),["SharedCodec544"]:c10(),["SharedCodec545"]:c11(),["SharedCodec546"]:c12(),["SharedCodec547"]:c13(),["SharedCodec548"]:c14(),["SharedCodec549"]:c15(),["SharedCodec550"]:c16(),["SharedCodec551"]:c17(),["SharedCodec552"]:c18(),["SharedCodec553"]:c19(),["SharedCodec554"]:c20(),["SharedCodec555"]:c21(),["SharedCodec556"]:c22(),["SharedCodec557"]:c23(),["SharedCodec558"]:c24(),["SharedCodec559"]:c25(),["SharedCodec560"]:c26(),["SharedCodec561"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
