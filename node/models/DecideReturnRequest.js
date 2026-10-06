import { d577 as c0, d2207 as c1, d2180 as c2, d2181 as c3, d2184 as c4, d2183 as c5, d2182 as c6, d2187 as c7, d2186 as c8, d2185 as c9, d2190 as c10, d2189 as c11, d2188 as c12, d2193 as c13, d2192 as c14, d2191 as c15, d2195 as c16, d2194 as c17, d2206 as c18, d2198 as c19, d2196 as c20, d2197 as c21, d2200 as c22, d2199 as c23, d2203 as c24, d2201 as c25, d2202 as c26, d2205 as c27, d2204 as c28 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d577 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d577;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec548"]:c2(),["SharedCodec549"]:c3(),["SharedCodec550"]:c4(),["SharedCodec551"]:c5(),["SharedCodec552"]:c6(),["SharedCodec553"]:c7(),["SharedCodec554"]:c8(),["SharedCodec555"]:c9(),["SharedCodec556"]:c10(),["SharedCodec557"]:c11(),["SharedCodec558"]:c12(),["SharedCodec559"]:c13(),["SharedCodec560"]:c14(),["SharedCodec561"]:c15(),["SharedCodec562"]:c16(),["SharedCodec563"]:c17(),["SharedCodec564"]:c18(),["SharedCodec565"]:c19(),["SharedCodec566"]:c20(),["SharedCodec567"]:c21(),["SharedCodec568"]:c22(),["SharedCodec569"]:c23(),["SharedCodec570"]:c24(),["SharedCodec571"]:c25(),["SharedCodec572"]:c26(),["SharedCodec573"]:c27(),["SharedCodec574"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
