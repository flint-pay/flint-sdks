import { d2208 as c0, d2181 as c1, d2182 as c2, d2185 as c3, d2184 as c4, d2183 as c5, d2188 as c6, d2187 as c7, d2186 as c8, d2191 as c9, d2190 as c10, d2189 as c11, d2194 as c12, d2193 as c13, d2192 as c14, d2196 as c15, d2195 as c16, d2207 as c17, d2199 as c18, d2197 as c19, d2198 as c20, d2201 as c21, d2200 as c22, d2204 as c23, d2202 as c24, d2203 as c25, d2206 as c26, d2205 as c27 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2208 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2208;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineDecision"]:c0(),["SharedCodec549"]:c1(),["SharedCodec550"]:c2(),["SharedCodec551"]:c3(),["SharedCodec552"]:c4(),["SharedCodec553"]:c5(),["SharedCodec554"]:c6(),["SharedCodec555"]:c7(),["SharedCodec556"]:c8(),["SharedCodec557"]:c9(),["SharedCodec558"]:c10(),["SharedCodec559"]:c11(),["SharedCodec560"]:c12(),["SharedCodec561"]:c13(),["SharedCodec562"]:c14(),["SharedCodec563"]:c15(),["SharedCodec564"]:c16(),["SharedCodec565"]:c17(),["SharedCodec566"]:c18(),["SharedCodec567"]:c19(),["SharedCodec568"]:c20(),["SharedCodec569"]:c21(),["SharedCodec570"]:c22(),["SharedCodec571"]:c23(),["SharedCodec572"]:c24(),["SharedCodec573"]:c25(),["SharedCodec574"]:c26(),["SharedCodec575"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
