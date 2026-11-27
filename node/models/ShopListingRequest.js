import { d11030 as c0, d11031 as c1 } from '../descriptors/data/526.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11061 as c2 } from '../descriptors/data/527.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11061 as d11061 } from '../descriptors/data/527.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2882"]:c0(),["SharedCodec2883"]:c1(),["ShopListingRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShopListingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
