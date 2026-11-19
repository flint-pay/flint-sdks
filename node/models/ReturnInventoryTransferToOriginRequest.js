import { d9226 as c0 } from '../descriptors/data/417.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9146 as c1, d9142 as c3, d9143 as c4, d9144 as c5, d9147 as c8, d9148 as c9, d9149 as c10, d9145 as c11 } from '../descriptors/data/413.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1817 as c2 } from '../descriptors/data/89.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9253 as c6, d9254 as c7 } from '../descriptors/data/419.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1817 as d1817 } from '../descriptors/data/89.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1817;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReturnInventoryTransferToOriginRequest"]:c2(),["SharedCodec1386"]:c3(),["SharedCodec1387"]:c4(),["SharedCodec1388"]:c5(),["SharedCodec2700"]:c6(),["SharedCodec2701"]:c7(),["SharedCodec448"]:c8(),["SharedCodec449"]:c9(),["SharedCodec450"]:c10(),["SharedCodec451"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnInventoryTransferToOriginRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
