import { d259 as c0, d1607 as c1, d1608 as c2, d1612 as c3, d1613 as c4, d1615 as c5, d1619 as c6, d257 as c7, d77 as c8, d1824 as c9, d1823 as c10, d2158 as c11, d2159 as c12, d14 as c13, d1822 as c14, d258 as c15 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1613 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1613;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventoryCount"]:c1(),["InventoryCountLine"]:c2(),["InventoryCountResult"]:c3(),["InventoryCountResultResponse"]:c4(),["InventoryItem"]:c5(),["InventoryLevel"]:c6(),["InventorySourceSystem"]:c7(),["MoneyValue"]:c8(),["NextAction"]:c9(),["NextActionMerchantAccountSession"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec1"]:c13(),["SharedCodec488"]:c14(),["SharedCodec65"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountResultResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
