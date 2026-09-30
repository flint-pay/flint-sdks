import { d1620 as c0, d1622 as c1, d69 as c2, d1646 as c3, d1645 as c4, d1959 as c5, d1960 as c6 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1622 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1622;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantBillingBalance"]:c0(),["MerchantBillingBalanceResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantBillingBalanceResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
