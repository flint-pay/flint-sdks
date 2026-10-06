import { d2181 as c0, d2154 as c1, d2155 as c2, d2158 as c3, d2157 as c4, d2156 as c5, d2161 as c6, d2160 as c7, d2159 as c8, d2164 as c9, d2163 as c10, d2162 as c11, d2167 as c12, d2166 as c13, d2165 as c14, d2169 as c15, d2168 as c16, d2180 as c17, d2172 as c18, d2170 as c19, d2171 as c20, d2174 as c21, d2173 as c22, d2177 as c23, d2175 as c24, d2176 as c25, d2179 as c26, d2178 as c27 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d2181 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2181;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineDecision"]:c0(),["SharedCodec546"]:c1(),["SharedCodec547"]:c2(),["SharedCodec548"]:c3(),["SharedCodec549"]:c4(),["SharedCodec550"]:c5(),["SharedCodec551"]:c6(),["SharedCodec552"]:c7(),["SharedCodec553"]:c8(),["SharedCodec554"]:c9(),["SharedCodec555"]:c10(),["SharedCodec556"]:c11(),["SharedCodec557"]:c12(),["SharedCodec558"]:c13(),["SharedCodec559"]:c14(),["SharedCodec560"]:c15(),["SharedCodec561"]:c16(),["SharedCodec562"]:c17(),["SharedCodec563"]:c18(),["SharedCodec564"]:c19(),["SharedCodec565"]:c20(),["SharedCodec566"]:c21(),["SharedCodec567"]:c22(),["SharedCodec568"]:c23(),["SharedCodec569"]:c24(),["SharedCodec570"]:c25(),["SharedCodec571"]:c26(),["SharedCodec572"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
