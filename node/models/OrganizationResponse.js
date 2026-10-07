import { d803 as c0, d77 as c1, d1830 as c2, d1829 as c3, d1911 as c4, d1916 as c5, d2164 as c6, d2165 as c7, d14 as c8, d1788 as c9, d1828 as c10 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1916 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1916;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrganizationSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["Organization"]:c4(),["OrganizationResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec488"]:c9(),["SharedCodec492"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrganizationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
