import { d502 as c0 } from '../descriptors/data/29.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8283 as c1, d8285 as c2 } from '../descriptors/data/367.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d502 as d502 } from '../descriptors/data/29.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d502;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageAllStatesRequest"]:c0(),["SharedCodec684"]:c1(),["SharedCodec686"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageAllStatesRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
