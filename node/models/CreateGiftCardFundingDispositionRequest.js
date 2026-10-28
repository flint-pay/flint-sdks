import { d157 as c0 } from '../descriptors/data/8.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d157 as d157 } from '../descriptors/data/8.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d157;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardFundingDispositionRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardFundingDispositionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
