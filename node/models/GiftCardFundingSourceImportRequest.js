import { d872 as c0 } from '../descriptors/data/47.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9063 as c1, d9069 as c2 } from '../descriptors/data/410.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d872 as d872 } from '../descriptors/data/47.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d872;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceImportRequest"]:c0(),["SharedCodec429"]:c1(),["SharedCodec435"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceImportRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
