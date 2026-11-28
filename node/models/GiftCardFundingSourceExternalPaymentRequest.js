import { d859 as c0 } from '../descriptors/data/47.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9142 as c1, d9143 as c2 } from '../descriptors/data/415.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d859 as d859 } from '../descriptors/data/47.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d859;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceExternalPaymentRequest"]:c0(),["SharedCodec435"]:c1(),["SharedCodec436"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceExternalPaymentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
