import { d11028 as c0, d11029 as c1 } from '../descriptors/data/524.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11060 as c2 } from '../descriptors/data/526.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d11060 as d11060 } from '../descriptors/data/526.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d11060;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2880"]:c0(),["SharedCodec2881"]:c1(),["ShopListingPatchRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShopListingPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
