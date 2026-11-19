import { d8244 as c0, d8241 as c2, d8242 as c3, d8243 as c4 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d322 as c1 } from '../descriptors/data/17.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d9592 as c5 } from '../descriptors/data/442.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d322 as d322 } from '../descriptors/data/17.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d322;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionInvoice"]:c1(),["SharedCodec348"]:c2(),["SharedCodec349"]:c3(),["SharedCodec350"]:c4(),["SharedCodec464"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionInvoice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
