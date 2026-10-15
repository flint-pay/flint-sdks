import { d1603 as c0, d1607 as c1, d1611 as c2, d1612 as c3, d1633 as c4, d228 as c5, d323 as c6, d1823 as c7, d1824 as c8, d2178 as c9, d2179 as c10, d14 as c11, d229 as c12, d1822 as c13 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1612 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryItem"]:c0(),["InventoryLevel"]:c1(),["InventoryMovement"]:c2(),["InventoryMovementListResponse"]:c3(),["InventorySourceReference"]:c4(),["InventorySourceSystem"]:c5(),["MoneyValue"]:c6(),["NextAction"]:c7(),["NextActionMerchantAccountSession"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec42"]:c12(),["SharedCodec467"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryMovementListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
