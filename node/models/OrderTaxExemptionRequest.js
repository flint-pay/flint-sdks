import { d8428 as c0 } from '../descriptors/data/369.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9334 as c1, d9342 as c2, d9343 as c3, d9344 as c4, d9345 as c5, d9346 as c6, d9347 as c7, d9348 as c8 } from '../descriptors/data/419.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8261 as c9, d8262 as c10, d8263 as c11, d8264 as c12 } from '../descriptors/data/360.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9334 as d9334 } from '../descriptors/data/419.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9334;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1973"]:c2(),["SharedCodec1974"]:c3(),["SharedCodec1975"]:c4(),["SharedCodec1976"]:c5(),["SharedCodec1980"]:c6(),["SharedCodec1981"]:c7(),["SharedCodec1982"]:c8(),["SharedCodec682"]:c9(),["SharedCodec683"]:c10(),["SharedCodec684"]:c11(),["SharedCodec685"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
