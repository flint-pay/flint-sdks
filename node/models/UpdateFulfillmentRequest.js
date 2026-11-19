import { d8135 as c0, d8133 as c3, d8134 as c4, d8132 as c6 } from '../descriptors/data/358.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8448 as c1, d8449 as c2 } from '../descriptors/data/376.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8036 as c5 } from '../descriptors/data/352.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8958 as c7, d8959 as c8, d8960 as c9, d8961 as c10, d8962 as c11, d8963 as c12, d8964 as c13, d8965 as c14, d8966 as c15, d8967 as c16 } from '../descriptors/data/405.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7742 as c17 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7742 as d7742 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7742;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec1716"]:c1(),["SharedCodec1717"]:c2(),["SharedCodec2"]:c3(),["SharedCodec3"]:c4(),["SharedCodec3065"]:c5(),["SharedCodec3068"]:c6(),["SharedCodec3084"]:c7(),["SharedCodec3085"]:c8(),["SharedCodec3086"]:c9(),["SharedCodec3087"]:c10(),["SharedCodec3088"]:c11(),["SharedCodec3089"]:c12(),["SharedCodec3090"]:c13(),["SharedCodec3091"]:c14(),["SharedCodec3092"]:c15(),["SharedCodec3093"]:c16(),["UpdateFulfillmentRequest"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateFulfillmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
