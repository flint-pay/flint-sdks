import { d7598 as c0 } from '../descriptors/data/319.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d7598 as d7598 } from '../descriptors/data/319.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7598;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ShopListingInputProduct"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeShopListingInputProduct(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
