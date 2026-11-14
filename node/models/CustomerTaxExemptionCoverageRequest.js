import { d6317 as c0 } from '../descriptors/data/290.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6162 as c1, d6163 as c2, d6164 as c3, d6165 as c4 } from '../descriptors/data/282.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6317 as d6317 } from '../descriptors/data/290.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6317;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec494"]:c1(),["SharedCodec495"]:c2(),["SharedCodec496"]:c3(),["SharedCodec497"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
