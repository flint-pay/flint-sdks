import { d14 as c0, d694 as c1, d69 as c2, d1646 as c3, d1645 as c4, d1959 as c5, d1960 as c6, d2103 as c7, d13 as c8, d12 as c9 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2103 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2103;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIKey"]:c0(),["DeveloperSandboxWithAPIKey"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SandboxWithAPIKeyResponse"]:c7(),["SharedCodec0"]:c8(),["SharedCodec1"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSandboxWithAPIKeyResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
