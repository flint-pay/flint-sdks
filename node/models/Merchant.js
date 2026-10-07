import { d58 as c0, d796 as c1, d926 as c2, d1785 as c3, d1824 as c4, d1823 as c5, d73 as c6, d14 as c7, d1782 as c8, d1783 as c9, d1784 as c10, d1822 as c11 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1785 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1785;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PostalAddress"]:c6(),["SharedCodec1"]:c7(),["SharedCodec484"]:c8(),["SharedCodec485"]:c9(),["SharedCodec486"]:c10(),["SharedCodec488"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
