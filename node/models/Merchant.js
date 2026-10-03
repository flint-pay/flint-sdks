import { d55 as c0, d776 as c1, d905 as c2, d1747 as c3, d1784 as c4, d1783 as c5, d70 as c6, d1744 as c7, d1745 as c8, d1746 as c9 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1747 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1747;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PostalAddress"]:c6(),["SharedCodec475"]:c7(),["SharedCodec476"]:c8(),["SharedCodec477"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
