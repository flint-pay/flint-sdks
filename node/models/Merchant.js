import { d58 as c0, d784 as c1, d912 as c2, d1758 as c3, d1797 as c4, d1796 as c5, d73 as c6, d14 as c7, d1755 as c8, d1756 as c9, d1757 as c10, d1795 as c11 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1758 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1758;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PostalAddress"]:c6(),["SharedCodec1"]:c7(),["SharedCodec481"]:c8(),["SharedCodec482"]:c9(),["SharedCodec483"]:c10(),["SharedCodec485"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
