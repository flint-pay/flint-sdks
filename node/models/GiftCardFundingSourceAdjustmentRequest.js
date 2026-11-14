import { d687 as c0 } from '../descriptors/data/38.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d687 as d687 } from '../descriptors/data/38.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d687;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceAdjustmentRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
