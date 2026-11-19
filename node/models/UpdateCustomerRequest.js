import { d8457 as c0, d8448 as c1, d8449 as c2, d8458 as c8, d8459 as c9 } from '../descriptors/data/376.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8133 as c3, d8134 as c4 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8037 as c5, d8038 as c6, d8036 as c7 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8416 as c10, d8417 as c11, d8418 as c12 } from '../descriptors/data/374.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7733 as c13 } from '../descriptors/data/325.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7733 as d7733 } from '../descriptors/data/325.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7733;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec1716"]:c1(),["SharedCodec1717"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3063"]:c5(),["SharedCodec3064"]:c6(),["SharedCodec3065"]:c7(),["SharedCodec3070"]:c8(),["SharedCodec3071"]:c9(),["SharedCodec3072"]:c10(),["SharedCodec3073"]:c11(),["SharedCodec3074"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
