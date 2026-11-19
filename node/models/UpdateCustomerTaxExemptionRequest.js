import { d8450 as c0 } from '../descriptors/data/376.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8036 as c1 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8132 as c2 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8419 as c3 } from '../descriptors/data/374.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8283 as c4, d8284 as c5, d8285 as c6, d8286 as c7 } from '../descriptors/data/367.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7734 as c8 } from '../descriptors/data/325.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7734 as d7734 } from '../descriptors/data/325.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec3065"]:c1(),["SharedCodec3068"]:c2(),["SharedCodec3075"]:c3(),["SharedCodec684"]:c4(),["SharedCodec685"]:c5(),["SharedCodec686"]:c6(),["SharedCodec687"]:c7(),["UpdateCustomerTaxExemptionRequest"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
