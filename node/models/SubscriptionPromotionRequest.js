import { d8238 as c0, d8239 as c1, d8240 as c2 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10962 as c3 } from '../descriptors/data/523.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d10962 as d10962 } from '../descriptors/data/523.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10962;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefInputPromotionCode"]:c0(),["PromotionRefInputPromotionID"]:c1(),["PromotionRefRequest"]:c2(),["SubscriptionPromotionRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
