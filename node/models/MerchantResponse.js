import { d58 as c0, d796 as c1, d926 as c2, d1784 as c3, d1801 as c4, d77 as c5, d1823 as c6, d1822 as c7, d73 as c8, d2157 as c9, d2158 as c10, d14 as c11, d1781 as c12, d1782 as c13, d1783 as c14, d1821 as c15 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1801 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1801;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PostalAddress"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec483"]:c12(),["SharedCodec484"]:c13(),["SharedCodec485"]:c14(),["SharedCodec487"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
