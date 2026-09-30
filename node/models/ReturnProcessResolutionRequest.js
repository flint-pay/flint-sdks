import { d69 as c0, d2039 as c1, d2058 as c2, d366 as c3, d2053 as c4, d2052 as c5, d2055 as c6, d2054 as c7, d2056 as c8 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2039 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2039;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnProcessResolutionRequest"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["SharedCodec135"]:c3(),["SharedCodec530"]:c4(),["SharedCodec531"]:c5(),["SharedCodec532"]:c6(),["SharedCodec533"]:c7(),["SharedCodec534"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
