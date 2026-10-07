import { d314 as c0, d1775 as c1, d1776 as c2, d1893 as c3, d1894 as c4, d1904 as c5, d2112 as c6, d2113 as c7, d14 as c8, d1774 as c9 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1894 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1894;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PartnerAppInstall"]:c3(),["PartnerAppInstallListResponse"]:c4(),["PartnerEnvironmentGrant"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7(),["SharedCodec1"]:c8(),["SharedCodec448"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppInstallListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
