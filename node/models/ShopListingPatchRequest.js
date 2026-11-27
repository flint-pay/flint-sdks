import { d11028 as c0, d11029 as c1 } from '../descriptors/data/525.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11060 as c2 } from '../descriptors/data/527.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d11060 as d11060 } from '../descriptors/data/527.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11060;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2880"]:c0(),["SharedCodec2881"]:c1(),["ShopListingPatchRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShopListingPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
