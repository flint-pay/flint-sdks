import { d259 as c0, d1606 as c1, d1607 as c2, d1611 as c3, d1612 as c4, d1614 as c5, d1618 as c6, d257 as c7, d77 as c8, d1823 as c9, d1822 as c10, d2157 as c11, d2158 as c12, d14 as c13, d1821 as c14, d258 as c15 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { d1612 } from '../descriptors/data.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1612;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventoryCount"]:c1(),["InventoryCountLine"]:c2(),["InventoryCountResult"]:c3(),["InventoryCountResultResponse"]:c4(),["InventoryItem"]:c5(),["InventoryLevel"]:c6(),["InventorySourceSystem"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec1"]:c13(),["SharedCodec487"]:c14(),["SharedCodec65"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
