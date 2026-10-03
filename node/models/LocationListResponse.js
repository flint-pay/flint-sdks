import { d1739 as c0, d196 as c1, d1737 as c2, d1738 as c3, d1742 as c4, d74 as c5, d1786 as c6, d1785 as c7, d2121 as c8, d2122 as c9 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1742 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1742;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Location"]:c0(),["LocationAddress"]:c1(),["LocationCoordinate"]:c2(),["LocationInventory"]:c3(),["LocationListResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLocationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
