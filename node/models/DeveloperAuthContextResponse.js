import { d739 as c0, d740 as c1, d74 as c2, d1784 as c3, d1783 as c4, d2118 as c5, d2119 as c6, d735 as c7, d736 as c8, d737 as c9, d738 as c10, d225 as c11 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d740 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d740;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperAuthContext"]:c0(),["DeveloperAuthContextResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec235"]:c7(),["SharedCodec236"]:c8(),["SharedCodec237"]:c9(),["SharedCodec238"]:c10(),["SharedCodec58"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperAuthContextResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
