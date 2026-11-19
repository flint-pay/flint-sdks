import { d10793 as c0, d10794 as c1 } from '../descriptors/data/514.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d208 as c2 } from '../descriptors/data/9.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d208 as d208 } from '../descriptors/data/9.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d208;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRecoveryEmailSettingsRequest"]:c0(),["CheckoutSavedPaymentDetailsSettingsRequest"]:c1(),["CheckoutSettingsRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutSettingsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
