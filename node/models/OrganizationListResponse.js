import { d775 as c0, d323 as c1, d1823 as c2, d1824 as c3, d1920 as c4, d1921 as c5, d2178 as c6, d2179 as c7, d14 as c8, d1784 as c9, d1822 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1921 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1921;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedOrganizationSummary"]:c0(),["MoneyValue"]:c1(),["NextAction"]:c2(),["NextActionMerchantAccountSession"]:c3(),["Organization"]:c4(),["OrganizationListResponse"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec465"]:c9(),["SharedCodec467"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrganizationListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
