import { d1737 as c0, d194 as c1, d1735 as c2, d1736 as c3, d1741 as c4, d74 as c5, d1784 as c6, d1783 as c7, d2119 as c8, d2120 as c9 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1741 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1741;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Location"]:c0(),["LocationAddress"]:c1(),["LocationCoordinate"]:c2(),["LocationInventory"]:c3(),["LocationResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
