import { d3230 as c0 } from '../descriptors/data/129.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3230 as d3230 } from '../descriptors/data/129.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutPromotionConfig"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutPromotionConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
