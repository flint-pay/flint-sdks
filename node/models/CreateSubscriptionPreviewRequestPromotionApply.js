import { d423 as c0 } from '../descriptors/data/26.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8238 as c1, d8239 as c2, d8240 as c3 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d423 as d423 } from '../descriptors/data/26.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d423;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPreviewRequestPromotionApply"]:c0(),["PromotionRefInputPromotionCode"]:c1(),["PromotionRefInputPromotionID"]:c2(),["PromotionRefRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPreviewRequestPromotionApply(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
