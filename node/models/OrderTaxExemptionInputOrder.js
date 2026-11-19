import { d8450 as c0 } from '../descriptors/data/376.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1381 as c1 } from '../descriptors/data/68.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9366 as c2 } from '../descriptors/data/426.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8283 as c3, d8284 as c4, d8285 as c5, d8286 as c6 } from '../descriptors/data/367.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1381 as d1381 } from '../descriptors/data/68.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1381;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionInputOrder"]:c1(),["SharedCodec1968"]:c2(),["SharedCodec684"]:c3(),["SharedCodec685"]:c4(),["SharedCodec686"]:c5(),["SharedCodec687"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
