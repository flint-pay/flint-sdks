import { d264 as c0 } from '../descriptors/data/14.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6949 as c1 } from '../descriptors/data/323.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6979 as c2, d6980 as c3, d6981 as c4, d6982 as c5, d6978 as c6, d6975 as c7, d6976 as c8, d6977 as c9 } from '../descriptors/data/325.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6965 as c10, d6966 as c11, d6967 as c12, d6968 as c13, d6969 as c14 } from '../descriptors/data/324.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d264 as d264 } from '../descriptors/data/14.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d264;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentConditionChangeRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec301"]:c3(),["SharedCodec302"]:c4(),["SharedCodec303"]:c5(),["SharedCodec304"]:c6(),["SharedCodec787"]:c7(),["SharedCodec788"]:c8(),["SharedCodec789"]:c9(),["SharedCodec790"]:c10(),["SharedCodec791"]:c11(),["SharedCodec792"]:c12(),["SharedCodec793"]:c13(),["SharedCodec794"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentConditionChangeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
