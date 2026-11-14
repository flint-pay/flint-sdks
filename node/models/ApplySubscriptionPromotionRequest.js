import { d24 as c0 } from '../descriptors/data/0.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6112 as c1, d6113 as c2, d6114 as c3 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d24 as d24 } from '../descriptors/data/0.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d24;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplySubscriptionPromotionRequest"]:c0(),["PromotionRefInputPromotionCode"]:c1(),["PromotionRefInputPromotionID"]:c2(),["PromotionRefRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplySubscriptionPromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
