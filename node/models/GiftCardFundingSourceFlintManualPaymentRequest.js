import { d860 as c0 } from '../descriptors/data/46.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d9067 as c1 } from '../descriptors/data/410.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d860 as d860 } from '../descriptors/data/46.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d860;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceFlintManualPaymentRequest"]:c0(),["SharedCodec433"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceFlintManualPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
