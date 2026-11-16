import { d6945 as c0, d6946 as c1, d6947 as c2 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9588 as c3 } from '../descriptors/data/468.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9588 as d9588 } from '../descriptors/data/468.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9588;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionRefInputPromotionCode"]:c0(),["PromotionRefInputPromotionID"]:c1(),["PromotionRefRequest"]:c2(),["SubscriptionPromotionRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
