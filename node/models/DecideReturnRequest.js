import { d578 as c0, d2214 as c1, d2187 as c2, d2188 as c3, d2191 as c4, d2190 as c5, d2189 as c6, d2194 as c7, d2193 as c8, d2192 as c9, d2197 as c10, d2196 as c11, d2195 as c12, d2200 as c13, d2199 as c14, d2198 as c15, d2202 as c16, d2201 as c17, d2213 as c18, d2205 as c19, d2203 as c20, d2204 as c21, d2207 as c22, d2206 as c23, d2210 as c24, d2208 as c25, d2209 as c26, d2212 as c27, d2211 as c28 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d578 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d578;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DecideReturnRequest"]:c0(),["ReturnLineDecision"]:c1(),["SharedCodec553"]:c2(),["SharedCodec554"]:c3(),["SharedCodec555"]:c4(),["SharedCodec556"]:c5(),["SharedCodec557"]:c6(),["SharedCodec558"]:c7(),["SharedCodec559"]:c8(),["SharedCodec560"]:c9(),["SharedCodec561"]:c10(),["SharedCodec562"]:c11(),["SharedCodec563"]:c12(),["SharedCodec564"]:c13(),["SharedCodec565"]:c14(),["SharedCodec566"]:c15(),["SharedCodec567"]:c16(),["SharedCodec568"]:c17(),["SharedCodec569"]:c18(),["SharedCodec570"]:c19(),["SharedCodec571"]:c20(),["SharedCodec572"]:c21(),["SharedCodec573"]:c22(),["SharedCodec574"]:c23(),["SharedCodec575"]:c24(),["SharedCodec576"]:c25(),["SharedCodec577"]:c26(),["SharedCodec578"]:c27(),["SharedCodec579"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDecideReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
