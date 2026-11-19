import { d9226 as c0 } from '../descriptors/data/417.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9146 as c1, d9142 as c3, d9143 as c4, d9144 as c5, d9147 as c12, d9148 as c13, d9149 as c14, d9145 as c15 } from '../descriptors/data/413.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1711 as c2 } from '../descriptors/data/84.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9245 as c6, d9246 as c7, d9247 as c8, d9248 as c9, d9249 as c10, d9250 as c11 } from '../descriptors/data/419.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1711 as d1711 } from '../descriptors/data/84.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1711;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1386"]:c3(),["SharedCodec1387"]:c4(),["SharedCodec1388"]:c5(),["SharedCodec2536"]:c6(),["SharedCodec2537"]:c7(),["SharedCodec2538"]:c8(),["SharedCodec2539"]:c9(),["SharedCodec2540"]:c10(),["SharedCodec2541"]:c11(),["SharedCodec448"]:c12(),["SharedCodec449"]:c13(),["SharedCodec450"]:c14(),["SharedCodec451"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
