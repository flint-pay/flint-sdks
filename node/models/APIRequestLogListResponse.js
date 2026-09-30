import { d18 as c0, d22 as c1, d21 as c2, d25 as c3, d69 as c4, d1646 as c5, d1645 as c6, d1959 as c7, d1960 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d22 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d22;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["APIRequestLog"]:c0(),["APIRequestLogListResponse"]:c1(),["ApiRequestLogExpansionShape"]:c2(),["ApiRequestLogResponseShapeMetadata"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeAPIRequestLogListResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
