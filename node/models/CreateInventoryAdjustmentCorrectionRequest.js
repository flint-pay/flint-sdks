import { d305 as c0 } from '../descriptors/data/16.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9120 as c1, d9130 as c10, d9131 as c11 } from '../descriptors/data/412.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9146 as c2, d9142 as c3, d9143 as c4, d9144 as c5, d9147 as c6, d9148 as c7, d9149 as c8, d9145 as c9, d9132 as c12 } from '../descriptors/data/413.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d305 as d305 } from '../descriptors/data/16.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d305;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentCorrectionRequest"]:c0(),["InventoryAdjustmentSetLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1386"]:c3(),["SharedCodec1387"]:c4(),["SharedCodec1388"]:c5(),["SharedCodec448"]:c6(),["SharedCodec449"]:c7(),["SharedCodec450"]:c8(),["SharedCodec451"]:c9(),["SharedCodec452"]:c10(),["SharedCodec453"]:c11(),["SharedCodec454"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentCorrectionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
