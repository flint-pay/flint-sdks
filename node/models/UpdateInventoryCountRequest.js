import { d7000 as c0 } from '../descriptors/data/326.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6979 as c1, d6980 as c2, d6981 as c3, d6982 as c4, d6978 as c5, d6975 as c6, d6976 as c7, d6977 as c8 } from '../descriptors/data/325.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5641 as c9 } from '../descriptors/data/247.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5641 as d5641 } from '../descriptors/data/247.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5641;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountObservationRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec301"]:c2(),["SharedCodec302"]:c3(),["SharedCodec303"]:c4(),["SharedCodec304"]:c5(),["SharedCodec787"]:c6(),["SharedCodec788"]:c7(),["SharedCodec789"]:c8(),["UpdateInventoryCountRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
