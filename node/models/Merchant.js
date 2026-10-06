import { d58 as c0, d796 as c1, d926 as c2, d1784 as c3, d1823 as c4, d1822 as c5, d73 as c6, d14 as c7, d1781 as c8, d1782 as c9, d1783 as c10, d1821 as c11 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1784 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1784;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PostalAddress"]:c6(),["SharedCodec1"]:c7(),["SharedCodec483"]:c8(),["SharedCodec484"]:c9(),["SharedCodec485"]:c10(),["SharedCodec487"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
