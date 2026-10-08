import { d1767 as c0, d1768 as c1, d1769 as c2, d1770 as c3, d1774 as c4, d323 as c5, d1820 as c6, d1821 as c7, d2162 as c8, d2163 as c9, d14 as c10, d1819 as c11 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d1774 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1774;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Location"]:c0(),["LocationAddress"]:c1(),["LocationCoordinate"]:c2(),["LocationInventory"]:c3(),["LocationResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["ResponseMeta"]:c8(),["ResponseWarning"]:c9(),["SharedCodec1"]:c10(),["SharedCodec466"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeLocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
