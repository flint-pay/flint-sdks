import { d2194 as c0, d2141 as c1, d2142 as c2, d2145 as c3, d2144 as c4, d2143 as c5, d2148 as c6, d2147 as c7, d2146 as c8, d2151 as c9, d2150 as c10, d2149 as c11, d2154 as c12, d2153 as c13, d2152 as c14, d2156 as c15, d2155 as c16, d2167 as c17, d2159 as c18, d2157 as c19, d2158 as c20, d2161 as c21, d2160 as c22, d2164 as c23, d2162 as c24, d2163 as c25, d2166 as c26, d2165 as c27 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { d2194 } from '../descriptors/data.js?sdk=1062b2a87ddfc25f3a8458c3e67aea98a29a33dcad943f63dceff9390190307c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2194;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessDecision"]:c0(),["SharedCodec535"]:c1(),["SharedCodec536"]:c2(),["SharedCodec537"]:c3(),["SharedCodec538"]:c4(),["SharedCodec539"]:c5(),["SharedCodec540"]:c6(),["SharedCodec541"]:c7(),["SharedCodec542"]:c8(),["SharedCodec543"]:c9(),["SharedCodec544"]:c10(),["SharedCodec545"]:c11(),["SharedCodec546"]:c12(),["SharedCodec547"]:c13(),["SharedCodec548"]:c14(),["SharedCodec549"]:c15(),["SharedCodec550"]:c16(),["SharedCodec551"]:c17(),["SharedCodec552"]:c18(),["SharedCodec553"]:c19(),["SharedCodec554"]:c20(),["SharedCodec555"]:c21(),["SharedCodec556"]:c22(),["SharedCodec557"]:c23(),["SharedCodec558"]:c24(),["SharedCodec559"]:c25(),["SharedCodec560"]:c26(),["SharedCodec561"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
