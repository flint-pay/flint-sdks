import { d255 as c0, d1581 as c1, d1582 as c2, d1583 as c3, d253 as c4, d77 as c5, d1797 as c6, d1796 as c7, d2131 as c8, d2132 as c9, d14 as c10, d1795 as c11, d254 as c12 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1583 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1583;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventoryCount"]:c1(),["InventoryCountLine"]:c2(),["InventoryCountListResponse"]:c3(),["InventorySourceSystem"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec485"]:c11(),["SharedCodec65"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
