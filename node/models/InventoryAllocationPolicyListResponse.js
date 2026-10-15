import { d1590 as c0, d1591 as c1, d1592 as c2, d323 as c3, d1823 as c4, d1824 as c5, d2054 as c6, d2178 as c7, d2179 as c8, d14 as c9, d1822 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1592 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1592;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryAllocationPolicy"]:c0(),["InventoryAllocationPolicyConfiguration"]:c1(),["InventoryAllocationPolicyListResponse"]:c2(),["MoneyValue"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PolicyLocation"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec467"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAllocationPolicyListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
