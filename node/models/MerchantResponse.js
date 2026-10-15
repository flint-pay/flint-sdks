import { d54 as c0, d775 as c1, d894 as c2, d1785 as c3, d1800 as c4, d1801 as c5, d1802 as c6, d323 as c7, d1823 as c8, d1824 as c9, d66 as c10, d2178 as c11, d2179 as c12, d14 as c13, d1784 as c14, d1822 as c15 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1802 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1802;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantReadinessAxis"]:c4(),["MerchantReadinessRequirements"]:c5(),["MerchantResponse"]:c6(),["MoneyValue"]:c7(),["NextAction"]:c8(),["NextActionMerchantAccountSession"]:c9(),["PostalAddress"]:c10(),["ResponseMeta"]:c11(),["ResponseWarning"]:c12(),["SharedCodec1"]:c13(),["SharedCodec465"]:c14(),["SharedCodec467"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
