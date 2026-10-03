import { d74 as c0, d1784 as c1, d1783 as c2, d1894 as c3, d1898 as c4, d1899 as c5, d2118 as c6, d2119 as c7 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1898 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1898;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["NextAction"]:c1(),["NextActionMerchantAccountSession"]:c2(),["PartnerApp"]:c3(),["PartnerAppListResponse"]:c4(),["PartnerAppPermissionManifestEntry"]:c5(),["ResponseMeta"]:c6(),["ResponseWarning"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePartnerAppListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
