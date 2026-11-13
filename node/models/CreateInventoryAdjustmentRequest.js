import { d268 as c0 } from '../descriptors/data/14.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6949 as c1 } from '../descriptors/data/323.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6951 as c2, d6953 as c3, d6958 as c9, d6959 as c10, d6960 as c11, d6961 as c12, d6962 as c13, d6963 as c14, d6964 as c15, d6965 as c19, d6966 as c20, d6967 as c21, d6968 as c22, d6969 as c23 } from '../descriptors/data/324.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6979 as c4, d6980 as c5, d6981 as c6, d6982 as c7, d6978 as c8, d6975 as c16, d6976 as c17, d6977 as c18 } from '../descriptors/data/325.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d268 as d268 } from '../descriptors/data/14.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d268;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryAdjustmentRequest"]:c0(),["InventoryAdjustmentConditionChangeLineRequest"]:c1(),["InventoryAdjustmentQuantityLineRequest"]:c2(),["InventoryAdjustmentSetLineRequest"]:c3(),["InventorySourceSystemRequest"]:c4(),["SharedCodec301"]:c5(),["SharedCodec302"]:c6(),["SharedCodec303"]:c7(),["SharedCodec304"]:c8(),["SharedCodec305"]:c9(),["SharedCodec306"]:c10(),["SharedCodec307"]:c11(),["SharedCodec308"]:c12(),["SharedCodec309"]:c13(),["SharedCodec310"]:c14(),["SharedCodec311"]:c15(),["SharedCodec787"]:c16(),["SharedCodec788"]:c17(),["SharedCodec789"]:c18(),["SharedCodec790"]:c19(),["SharedCodec791"]:c20(),["SharedCodec792"]:c21(),["SharedCodec793"]:c22(),["SharedCodec794"]:c23()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryAdjustmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
