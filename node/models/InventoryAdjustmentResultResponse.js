import { d10 as c0, d1585 as c1, d1588 as c2, d1589 as c3, d1603 as c4, d1607 as c5, d228 as c6, d323 as c7, d1823 as c8, d1824 as c9, d2178 as c10, d2179 as c11, d14 as c12, d229 as c13, d1822 as c14 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1589 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1589;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AdjustmentLine"]:c0(),["InventoryAdjustment"]:c1(),["InventoryAdjustmentResult"]:c2(),["InventoryAdjustmentResultResponse"]:c3(),["InventoryItem"]:c4(),["InventoryLevel"]:c5(),["InventorySourceSystem"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["ResponseMeta"]:c10(),["ResponseWarning"]:c11(),["SharedCodec1"]:c12(),["SharedCodec42"]:c13(),["SharedCodec467"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryAdjustmentResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
