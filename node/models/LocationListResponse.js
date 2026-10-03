import { d1737 as c0, d194 as c1, d1735 as c2, d1736 as c3, d1740 as c4, d74 as c5, d1784 as c6, d1783 as c7, d2118 as c8, d2119 as c9 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1740 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1740;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Location"]:c0(),["LocationAddress"]:c1(),["LocationCoordinate"]:c2(),["LocationInventory"]:c3(),["LocationListResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLocationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
