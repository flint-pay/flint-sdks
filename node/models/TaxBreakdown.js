import { d41 as c0, d2375 as c1, d2376 as c2, d2377 as c3, d2378 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2378 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2378;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec6"]:c0(),["SharedCodec622"]:c1(),["SharedCodec623"]:c2(),["SharedCodec624"]:c3(),["TaxBreakdown"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxBreakdown(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
