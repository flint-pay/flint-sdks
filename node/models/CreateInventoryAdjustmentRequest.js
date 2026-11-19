import { d308 as c0 } from '../descriptors/data/16.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9116 as c1, d9118 as c2, d9120 as c3, d9121 as c8, d9122 as c9, d9123 as c10, d9124 as c11, d9125 as c12, d9130 as c17, d9131 as c18 } from '../descriptors/data/412.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9146 as c4, d9142 as c5, d9143 as c6, d9144 as c7, d9147 as c13, d9148 as c14, d9149 as c15, d9145 as c16, d9132 as c19, d9133 as c20, d9134 as c21, d9135 as c22, d9136 as c23 } from '../descriptors/data/413.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d308 as d308 } from '../descriptors/data/16.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d308;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec1386"]:c5(),["SharedCodec1387"]:c6(),["SharedCodec1388"]:c7(),["SharedCodec1389"]:c8(),["SharedCodec1390"]:c9(),["SharedCodec1391"]:c10(),["SharedCodec1392"]:c11(),["SharedCodec1393"]:c12(),["SharedCodec448"]:c13(),["SharedCodec449"]:c14(),["SharedCodec450"]:c15(),["SharedCodec451"]:c16(),["SharedCodec452"]:c17(),["SharedCodec453"]:c18(),["SharedCodec454"]:c19(),["SharedCodec455"]:c20(),["SharedCodec456"]:c21(),["SharedCodec457"]:c22(),["SharedCodec458"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
