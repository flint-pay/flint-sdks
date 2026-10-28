import { d3550 as c0 } from '../descriptors/data/145.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3550 as d3550 } from '../descriptors/data/145.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3550;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCallerSuppliedPricingStrategyRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryCallerSuppliedPricingStrategyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
