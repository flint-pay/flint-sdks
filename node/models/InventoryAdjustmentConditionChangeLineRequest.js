import { d3983 as c0 } from '../descriptors/data/168.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3999 as c1, d4000 as c2, d4001 as c3, d4002 as c4, d4003 as c5 } from '../descriptors/data/169.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3983 as d3983 } from '../descriptors/data/168.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3983;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAdjustmentConditionChangeLineRequest"]:c0(),["SharedCodec840"]:c1(),["SharedCodec841"]:c2(),["SharedCodec842"]:c3(),["SharedCodec843"]:c4(),["SharedCodec844"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentConditionChangeLineRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
