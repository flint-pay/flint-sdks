import { d699 as c0 } from '../descriptors/data/38.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6917 as c1 } from '../descriptors/data/326.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6923 as c2 } from '../descriptors/data/327.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d699 as d699 } from '../descriptors/data/38.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d699;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceImportRequest"]:c0(),["SharedCodec278"]:c1(),["SharedCodec284"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceImportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
