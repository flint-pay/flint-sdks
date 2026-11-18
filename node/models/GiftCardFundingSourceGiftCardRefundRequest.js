import { d868 as c0 } from '../descriptors/data/47.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9024 as c1 } from '../descriptors/data/403.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d868 as d868 } from '../descriptors/data/47.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d868;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceGiftCardRefundRequest"]:c0(),["SharedCodec433"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceGiftCardRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
