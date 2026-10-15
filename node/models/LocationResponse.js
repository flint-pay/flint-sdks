import { d1770 as c0, d1771 as c1, d1772 as c2, d1773 as c3, d1777 as c4, d323 as c5, d1823 as c6, d1824 as c7, d2178 as c8, d2179 as c9, d14 as c10, d1822 as c11 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1777 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1777;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Location"]:c0(),["LocationAddress"]:c1(),["LocationCoordinate"]:c2(),["LocationInventory"]:c3(),["LocationResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec467"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
