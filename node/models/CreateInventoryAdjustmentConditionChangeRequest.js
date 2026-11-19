import { d304 as c0 } from '../descriptors/data/15.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9116 as c1, d9121 as c6, d9122 as c7, d9123 as c8, d9124 as c9, d9125 as c10 } from '../descriptors/data/412.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9146 as c2, d9142 as c3, d9143 as c4, d9144 as c5, d9147 as c11, d9148 as c12, d9149 as c13, d9145 as c14 } from '../descriptors/data/413.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d304 as d304 } from '../descriptors/data/15.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d304;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1386"]:c3(),["SharedCodec1387"]:c4(),["SharedCodec1388"]:c5(),["SharedCodec1389"]:c6(),["SharedCodec1390"]:c7(),["SharedCodec1391"]:c8(),["SharedCodec1392"]:c9(),["SharedCodec1393"]:c10(),["SharedCodec448"]:c11(),["SharedCodec449"]:c12(),["SharedCodec450"]:c13(),["SharedCodec451"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
