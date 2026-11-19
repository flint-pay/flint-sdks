import { d7907 as c0 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10315 as c1, d10327 as c2 } from '../descriptors/data/485.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10315 as d10315 } from '../descriptors/data/485.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10315;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PriceListPriceRequest"]:c1(),["QuantityPriceBreakRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePriceListPriceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
