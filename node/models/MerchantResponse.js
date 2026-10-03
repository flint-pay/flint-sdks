import { d55 as c0, d776 as c1, d905 as c2, d1747 as c3, d1763 as c4, d74 as c5, d1784 as c6, d1783 as c7, d70 as c8, d2118 as c9, d2119 as c10, d1744 as c11, d1745 as c12, d1746 as c13 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1763 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1763;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PostalAddress"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec475"]:c11(),["SharedCodec476"]:c12(),["SharedCodec477"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
