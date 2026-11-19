import { d736 as c0 } from '../descriptors/data/41.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9226 as c1 } from '../descriptors/data/417.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9146 as c2, d9142 as c5, d9143 as c6, d9144 as c7, d9147 as c8, d9148 as c9, d9149 as c10, d9145 as c11 } from '../descriptors/data/413.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9233 as c3, d9234 as c4 } from '../descriptors/data/418.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d736 as d736 } from '../descriptors/data/41.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d736;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DepartInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec1100"]:c3(),["SharedCodec1101"]:c4(),["SharedCodec1386"]:c5(),["SharedCodec1387"]:c6(),["SharedCodec1388"]:c7(),["SharedCodec448"]:c8(),["SharedCodec449"]:c9(),["SharedCodec450"]:c10(),["SharedCodec451"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDepartInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
