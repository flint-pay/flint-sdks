import { d8748 as c0, d8752 as c1, d8753 as c3, d8754 as c4, d8755 as c5, d8756 as c6, d8757 as c7, d8758 as c8, d8759 as c9 } from '../descriptors/data/392.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c2 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8760 as c10, d8761 as c11, d8762 as c12, d8763 as c13 } from '../descriptors/data/393.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8748 as d8748 } from '../descriptors/data/392.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8748;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec196"]:c3(),["SharedCodec197"]:c4(),["SharedCodec198"]:c5(),["SharedCodec199"]:c6(),["SharedCodec200"]:c7(),["SharedCodec201"]:c8(),["SharedCodec202"]:c9(),["SharedCodec203"]:c10(),["SharedCodec204"]:c11(),["SharedCodec205"]:c12(),["SharedCodec206"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
