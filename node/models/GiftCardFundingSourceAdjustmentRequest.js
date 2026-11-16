import { d689 as c0 } from '../descriptors/data/37.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d689 as d689 } from '../descriptors/data/37.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d689;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceAdjustmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
