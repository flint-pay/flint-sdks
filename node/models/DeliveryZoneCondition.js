import { d3568 as c0 } from '../descriptors/data/146.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3568 as d3568 } from '../descriptors/data/146.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3568;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryZoneCondition"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneCondition(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
