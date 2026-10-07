import { d848 as c0, d835 as c1, d836 as c2, d837 as c3, d838 as c4, d839 as c5, d840 as c6, d841 as c7, d842 as c8, d843 as c9, d844 as c10, d845 as c11, d846 as c12, d847 as c13 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d848 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d848;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec259"]:c1(),["SharedCodec260"]:c2(),["SharedCodec261"]:c3(),["SharedCodec262"]:c4(),["SharedCodec263"]:c5(),["SharedCodec264"]:c6(),["SharedCodec265"]:c7(),["SharedCodec266"]:c8(),["SharedCodec267"]:c9(),["SharedCodec268"]:c10(),["SharedCodec269"]:c11(),["SharedCodec270"]:c12(),["SharedCodec271"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
