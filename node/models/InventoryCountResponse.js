import { d230 as c0, d1595 as c1, d1596 as c2, d1599 as c3, d228 as c4, d323 as c5, d1823 as c6, d1824 as c7, d2178 as c8, d2179 as c9, d14 as c10, d229 as c11, d1822 as c12 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1599 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1599;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CountProvenance"]:c0(),["InventoryCount"]:c1(),["InventoryCountLine"]:c2(),["InventoryCountResponse"]:c3(),["InventorySourceSystem"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec42"]:c11(),["SharedCodec467"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryCountResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
