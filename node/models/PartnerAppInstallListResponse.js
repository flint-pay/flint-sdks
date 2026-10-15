import { d323 as c0, d1823 as c1, d1824 as c2, d1951 as c3, d1952 as c4, d1962 as c5, d2178 as c6, d2179 as c7, d14 as c8, d1822 as c9 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1952 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1952;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PartnerAppInstall"]:c3(),["PartnerAppInstallListResponse"]:c4(),["PartnerEnvironmentGrant"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec467"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppInstallListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
