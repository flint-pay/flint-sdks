import { d8255 as c0 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8255 as d8255 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8255;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutTipConfigRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutTipConfigRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
