import { d229 as c0 } from '../descriptors/data/10.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9981 as c1, d9983 as c2, d9984 as c3, d9985 as c4, d9986 as c5, d9987 as c6, d9988 as c11, d9989 as c13 } from '../descriptors/data/464.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10115 as c7, d10116 as c8, d10117 as c9, d10118 as c10, d10121 as c12 } from '../descriptors/data/472.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d229 as d229 } from '../descriptors/data/10.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2242"]:c3(),["SharedCodec2243"]:c4(),["SharedCodec2244"]:c5(),["SharedCodec2245"]:c6(),["SharedCodec328"]:c7(),["SharedCodec329"]:c8(),["SharedCodec330"]:c9(),["SharedCodec331"]:c10(),["SharedCodec332"]:c11(),["SharedCodec333"]:c12(),["SharedCodec334"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
