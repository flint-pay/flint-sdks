import { d9226 as c0 } from '../descriptors/data/417.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9146 as c1, d9142 as c2, d9143 as c3, d9144 as c4, d9147 as c5, d9148 as c6, d9149 as c7, d9145 as c8 } from '../descriptors/data/413.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9226 as d9226 } from '../descriptors/data/417.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9226;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec1386"]:c2(),["SharedCodec1387"]:c3(),["SharedCodec1388"]:c4(),["SharedCodec448"]:c5(),["SharedCodec449"]:c6(),["SharedCodec450"]:c7(),["SharedCodec451"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
