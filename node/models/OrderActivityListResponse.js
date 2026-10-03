import { d74 as c0, d1784 as c1, d1783 as c2, d1805 as c3, d1806 as c4, d2118 as c5, d2119 as c6, d1804 as c7 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1806 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1806;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["OrderActivity"]:c3(),["OrderActivityListResponse"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SignedMoney"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderActivityListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
