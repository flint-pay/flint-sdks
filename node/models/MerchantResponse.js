import { d55 as c0, d778 as c1, d907 as c2, d1749 as c3, d1765 as c4, d74 as c5, d1786 as c6, d1785 as c7, d70 as c8, d2121 as c9, d2122 as c10, d1746 as c11, d1747 as c12, d1748 as c13 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1765 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1765;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PostalAddress"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec475"]:c11(),["SharedCodec476"]:c12(),["SharedCodec477"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
