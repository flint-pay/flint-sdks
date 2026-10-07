import { d58 as c0, d803 as c1, d932 as c2, d1791 as c3, d1830 as c4, d1829 as c5, d73 as c6, d14 as c7, d1788 as c8, d1789 as c9, d1790 as c10, d1828 as c11 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1791 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1791;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["NextAction"]:c4(),["NextActionMerchantAccountSession"]:c5(),["PostalAddress"]:c6(),["SharedCodec1"]:c7(),["SharedCodec488"]:c8(),["SharedCodec489"]:c9(),["SharedCodec490"]:c10(),["SharedCodec492"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
