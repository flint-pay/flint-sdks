import { d11030 as c0, d11031 as c1 } from '../descriptors/data/525.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11061 as c2 } from '../descriptors/data/526.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11061 as d11061 } from '../descriptors/data/526.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2882"]:c0(),["SharedCodec2883"]:c1(),["ShopListingRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShopListingRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
