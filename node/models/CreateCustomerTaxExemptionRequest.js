import { d262 as c0 } from '../descriptors/data/13.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8428 as c1 } from '../descriptors/data/369.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8014 as c2 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8261 as c3, d8262 as c4, d8263 as c5, d8264 as c6 } from '../descriptors/data/360.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d262 as d262 } from '../descriptors/data/13.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d262;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerTaxExemptionRequest"]:c0(),["CustomerTaxExemptionCoverageRequest"]:c1(),["MetadataRequest"]:c2(),["SharedCodec682"]:c3(),["SharedCodec683"]:c4(),["SharedCodec684"]:c5(),["SharedCodec685"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
