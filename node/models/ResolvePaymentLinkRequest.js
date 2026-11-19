import { d8252 as c0, d8246 as c7, d8247 as c8, d8257 as c11, d8258 as c12, d8259 as c16 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7907 as c1 } from '../descriptors/data/343.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10175 as c2 } from '../descriptors/data/475.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10188 as c3, d10189 as c4, d10190 as c6 } from '../descriptors/data/476.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1769 as c5 } from '../descriptors/data/87.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10217 as c9, d10218 as c10 } from '../descriptors/data/479.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8703 as c13, d8704 as c14, d8705 as c15 } from '../descriptors/data/389.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d1769 as d1769 } from '../descriptors/data/87.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1769;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutSubscriptionTermsRequest"]:c0(),["MoneyValue"]:c1(),["PaymentLinkResolvePrefillRequest"]:c2(),["ResolvePaymentLinkLineItemModifierRequest"]:c3(),["ResolvePaymentLinkLineItemModifiers"]:c4(),["ResolvePaymentLinkRequest"]:c5(),["ResolvePaymentLinkTextModifierRequest"]:c6(),["SharedCodec232"]:c7(),["SharedCodec233"]:c8(),["SharedCodec2605"]:c9(),["SharedCodec2606"]:c10(),["SharedCodec314"]:c11(),["SharedCodec315"]:c12(),["SharedCodec482"]:c13(),["SharedCodec484"]:c14(),["SharedCodec485"]:c15(),["SubscriptionPlanChangeLineItemRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeResolvePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
