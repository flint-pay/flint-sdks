import { d7059 as c0 } from '../descriptors/data/329.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6979 as c1, d6980 as c2, d6981 as c3, d6982 as c4, d6978 as c5, d6975 as c6, d6976 as c7, d6977 as c8 } from '../descriptors/data/325.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7059 as d7059 } from '../descriptors/data/329.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec301"]:c2(),["SharedCodec302"]:c3(),["SharedCodec303"]:c4(),["SharedCodec304"]:c5(),["SharedCodec787"]:c6(),["SharedCodec788"]:c7(),["SharedCodec789"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryProvenanceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
