import { d6317 as c0 } from '../descriptors/data/290.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7236 as c1 } from '../descriptors/data/341.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7244 as c2, d7245 as c3, d7246 as c4, d7247 as c5, d7248 as c6, d7249 as c7, d7250 as c8 } from '../descriptors/data/342.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6162 as c9, d6163 as c10, d6164 as c11, d6165 as c12 } from '../descriptors/data/282.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7236 as d7236 } from '../descriptors/data/341.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7236;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1098"]:c2(),["SharedCodec1099"]:c3(),["SharedCodec1100"]:c4(),["SharedCodec1101"]:c5(),["SharedCodec1102"]:c6(),["SharedCodec1103"]:c7(),["SharedCodec1104"]:c8(),["SharedCodec494"]:c9(),["SharedCodec495"]:c10(),["SharedCodec496"]:c11(),["SharedCodec497"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
