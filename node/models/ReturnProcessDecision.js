import { d2233 as c0, d2180 as c1, d2181 as c2, d2184 as c3, d2183 as c4, d2182 as c5, d2187 as c6, d2186 as c7, d2185 as c8, d2190 as c9, d2189 as c10, d2188 as c11, d2193 as c12, d2192 as c13, d2191 as c14, d2195 as c15, d2194 as c16, d2206 as c17, d2198 as c18, d2196 as c19, d2197 as c20, d2200 as c21, d2199 as c22, d2203 as c23, d2201 as c24, d2202 as c25, d2205 as c26, d2204 as c27 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2233 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2233;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnProcessDecision"]:c0(),["SharedCodec548"]:c1(),["SharedCodec549"]:c2(),["SharedCodec550"]:c3(),["SharedCodec551"]:c4(),["SharedCodec552"]:c5(),["SharedCodec553"]:c6(),["SharedCodec554"]:c7(),["SharedCodec555"]:c8(),["SharedCodec556"]:c9(),["SharedCodec557"]:c10(),["SharedCodec558"]:c11(),["SharedCodec559"]:c12(),["SharedCodec560"]:c13(),["SharedCodec561"]:c14(),["SharedCodec562"]:c15(),["SharedCodec563"]:c16(),["SharedCodec564"]:c17(),["SharedCodec565"]:c18(),["SharedCodec566"]:c19(),["SharedCodec567"]:c20(),["SharedCodec568"]:c21(),["SharedCodec569"]:c22(),["SharedCodec570"]:c23(),["SharedCodec571"]:c24(),["SharedCodec572"]:c25(),["SharedCodec573"]:c26(),["SharedCodec574"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
