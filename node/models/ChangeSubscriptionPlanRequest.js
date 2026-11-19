import { d173 as c0 } from '../descriptors/data/8.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d8246 as c1, d8247 as c2, d8259 as c3 } from '../descriptors/data/365.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d173 as d173 } from '../descriptors/data/8.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d173;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ChangeSubscriptionPlanRequest"]:c0(),["SharedCodec232"]:c1(),["SharedCodec233"]:c2(),["SubscriptionPlanChangeLineItemRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeChangeSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
