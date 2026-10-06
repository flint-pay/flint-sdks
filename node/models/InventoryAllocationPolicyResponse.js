import { d1576 as c0, d1577 as c1, d1579 as c2, d77 as c3, d1797 as c4, d1796 as c5, d2006 as c6, d2131 as c7, d2132 as c8, d14 as c9, d1795 as c10 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1579 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1579;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicy"]:c0(),["InventoryAllocationPolicyConfiguration"]:c1(),["InventoryAllocationPolicyResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PolicyLocation"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec485"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationPolicyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
