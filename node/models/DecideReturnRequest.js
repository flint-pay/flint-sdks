import { d568 as c0, d2181 as c1, d2154 as c2, d2155 as c3, d2158 as c4, d2157 as c5, d2156 as c6, d2161 as c7, d2160 as c8, d2159 as c9, d2164 as c10, d2163 as c11, d2162 as c12, d2167 as c13, d2166 as c14, d2165 as c15, d2169 as c16, d2168 as c17, d2180 as c18, d2172 as c19, d2170 as c20, d2171 as c21, d2174 as c22, d2173 as c23, d2177 as c24, d2175 as c25, d2176 as c26, d2179 as c27, d2178 as c28 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d568 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d568;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec546"]:c2(),["SharedCodec547"]:c3(),["SharedCodec548"]:c4(),["SharedCodec549"]:c5(),["SharedCodec550"]:c6(),["SharedCodec551"]:c7(),["SharedCodec552"]:c8(),["SharedCodec553"]:c9(),["SharedCodec554"]:c10(),["SharedCodec555"]:c11(),["SharedCodec556"]:c12(),["SharedCodec557"]:c13(),["SharedCodec558"]:c14(),["SharedCodec559"]:c15(),["SharedCodec560"]:c16(),["SharedCodec561"]:c17(),["SharedCodec562"]:c18(),["SharedCodec563"]:c19(),["SharedCodec564"]:c20(),["SharedCodec565"]:c21(),["SharedCodec566"]:c22(),["SharedCodec567"]:c23(),["SharedCodec568"]:c24(),["SharedCodec569"]:c25(),["SharedCodec570"]:c26(),["SharedCodec571"]:c27(),["SharedCodec572"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
