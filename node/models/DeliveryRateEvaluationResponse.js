import { d680 as c0, d681 as c1 } from '../descriptors/data/38.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d687 as c2, d688 as c3 } from '../descriptors/data/39.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c4 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1942 as c5, d1944 as c6, d1945 as c7, d1946 as c8 } from '../descriptors/data/96.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1947 as c9, d1948 as c10 } from '../descriptors/data/97.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8757 as c11, d8759 as c12 } from '../descriptors/data/392.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8760 as c13, d8763 as c14 } from '../descriptors/data/393.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d687 as d687 } from '../descriptors/data/39.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d687;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec1029"]:c5(),["SharedCodec1030"]:c6(),["SharedCodec1031"]:c7(),["SharedCodec1032"]:c8(),["SharedCodec1033"]:c9(),["SharedCodec1034"]:c10(),["SharedCodec200"]:c11(),["SharedCodec202"]:c12(),["SharedCodec203"]:c13(),["SharedCodec206"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
