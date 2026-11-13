import { d119 as c0 } from '../descriptors/data/5.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7059 as c1, d7066 as c3, d7067 as c4 } from '../descriptors/data/329.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6979 as c2, d6980 as c5, d6981 as c6, d6982 as c7, d6978 as c8, d6975 as c9, d6976 as c10, d6977 as c11 } from '../descriptors/data/325.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d119 as d119 } from '../descriptors/data/5.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d119;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelInventoryTransferRequest"]:c0(),["InventoryProvenanceRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec138"]:c3(),["SharedCodec139"]:c4(),["SharedCodec301"]:c5(),["SharedCodec302"]:c6(),["SharedCodec303"]:c7(),["SharedCodec304"]:c8(),["SharedCodec787"]:c9(),["SharedCodec788"]:c10(),["SharedCodec789"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
