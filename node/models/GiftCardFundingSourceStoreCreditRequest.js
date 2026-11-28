import { d879 as c0 } from '../descriptors/data/48.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9157 as c1 } from '../descriptors/data/416.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d879 as d879 } from '../descriptors/data/48.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d879;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceStoreCreditRequest"]:c0(),["SharedCodec450"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceStoreCreditRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
