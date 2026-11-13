import { d7059 as c0, d7068 as c3, d7069 as c4, d7070 as c5, d7071 as c6, d7072 as c7 } from '../descriptors/data/329.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6979 as c1, d6980 as c9, d6981 as c10, d6982 as c11, d6978 as c12, d6975 as c13, d6976 as c14, d6977 as c15 } from '../descriptors/data/325.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1293 as c2 } from '../descriptors/data/62.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7073 as c8 } from '../descriptors/data/330.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d1293 as d1293 } from '../descriptors/data/62.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["ReceiveInventoryTransferRequest"]:c2(),["SharedCodec1398"]:c3(),["SharedCodec1399"]:c4(),["SharedCodec1400"]:c5(),["SharedCodec1401"]:c6(),["SharedCodec1402"]:c7(),["SharedCodec1403"]:c8(),["SharedCodec301"]:c9(),["SharedCodec302"]:c10(),["SharedCodec303"]:c11(),["SharedCodec304"]:c12(),["SharedCodec787"]:c13(),["SharedCodec788"]:c14(),["SharedCodec789"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReceiveInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
