import { d58 as c0, d803 as c1, d932 as c2, d1791 as c3, d1808 as c4, d77 as c5, d1830 as c6, d1829 as c7, d73 as c8, d2164 as c9, d2165 as c10, d14 as c11, d1788 as c12, d1789 as c13, d1790 as c14, d1828 as c15 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1808 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1808;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Banner"]:c0(),["ExpandedOrganizationSummary"]:c1(),["Image"]:c2(),["Merchant"]:c3(),["MerchantResponse"]:c4(),["MoneyValue"]:c5(),["NextAction"]:c6(),["NextActionMerchantAccountSession"]:c7(),["PostalAddress"]:c8(),["ResponseMeta"]:c9(),["ResponseWarning"]:c10(),["SharedCodec1"]:c11(),["SharedCodec488"]:c12(),["SharedCodec489"]:c13(),["SharedCodec490"]:c14(),["SharedCodec492"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
