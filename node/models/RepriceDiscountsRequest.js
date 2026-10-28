import { d900 as c0 } from '../descriptors/data/39.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d900 as d900 } from '../descriptors/data/39.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d900;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RepriceDiscountsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRepriceDiscountsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
