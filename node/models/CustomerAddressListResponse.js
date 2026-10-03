import { d542 as c0, d543 as c1, d74 as c2, d1786 as c3, d1785 as c4, d70 as c5, d2121 as c6, d2122 as c7 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d543 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d543;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerAddress"]:c0(),["CustomerAddressListResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["PostalAddress"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAddressListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
