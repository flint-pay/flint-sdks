import { d2214 as c0, d2187 as c1, d2188 as c2, d2191 as c3, d2190 as c4, d2189 as c5, d2194 as c6, d2193 as c7, d2192 as c8, d2197 as c9, d2196 as c10, d2195 as c11, d2200 as c12, d2199 as c13, d2198 as c14, d2202 as c15, d2201 as c16, d2213 as c17, d2205 as c18, d2203 as c19, d2204 as c20, d2207 as c21, d2206 as c22, d2210 as c23, d2208 as c24, d2209 as c25, d2212 as c26, d2211 as c27 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2214 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2214;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnLineDecision"]:c0(),["SharedCodec553"]:c1(),["SharedCodec554"]:c2(),["SharedCodec555"]:c3(),["SharedCodec556"]:c4(),["SharedCodec557"]:c5(),["SharedCodec558"]:c6(),["SharedCodec559"]:c7(),["SharedCodec560"]:c8(),["SharedCodec561"]:c9(),["SharedCodec562"]:c10(),["SharedCodec563"]:c11(),["SharedCodec564"]:c12(),["SharedCodec565"]:c13(),["SharedCodec566"]:c14(),["SharedCodec567"]:c15(),["SharedCodec568"]:c16(),["SharedCodec569"]:c17(),["SharedCodec570"]:c18(),["SharedCodec571"]:c19(),["SharedCodec572"]:c20(),["SharedCodec573"]:c21(),["SharedCodec574"]:c22(),["SharedCodec575"]:c23(),["SharedCodec576"]:c24(),["SharedCodec577"]:c25(),["SharedCodec578"]:c26(),["SharedCodec579"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnLineDecision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
