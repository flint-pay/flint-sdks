import { d8450 as c0 } from '../descriptors/data/376.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9356 as c1, d9364 as c2, d9365 as c3, d9366 as c4, d9367 as c5, d9368 as c6, d9369 as c7, d9370 as c8 } from '../descriptors/data/426.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8283 as c9, d8284 as c10, d8285 as c11, d8286 as c12 } from '../descriptors/data/367.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9356 as d9356 } from '../descriptors/data/426.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1966"]:c2(),["SharedCodec1967"]:c3(),["SharedCodec1968"]:c4(),["SharedCodec1969"]:c5(),["SharedCodec1973"]:c6(),["SharedCodec1974"]:c7(),["SharedCodec1975"]:c8(),["SharedCodec684"]:c9(),["SharedCodec685"]:c10(),["SharedCodec686"]:c11(),["SharedCodec687"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
