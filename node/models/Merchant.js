import { d54 as c0, d775 as c1, d894 as c2, d1785 as c3, d1800 as c4, d1801 as c5, d1823 as c6, d1824 as c7, d66 as c8, d14 as c9, d1784 as c10, d1822 as c11 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d1785 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1785;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantReadinessAxis"]:c4(),["MerchantReadinessRequirements"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PostalAddress"]:c8(),["SharedCodec1"]:c9(),["SharedCodec465"]:c10(),["SharedCodec467"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
