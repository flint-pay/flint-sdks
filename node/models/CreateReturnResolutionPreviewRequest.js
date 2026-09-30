import { d436 as c0, d69 as c1, d2058 as c2, d2061 as c3, d2066 as c4, d366 as c5, d433 as c6, d435 as c7, d434 as c8, d2053 as c9, d2052 as c10, d2055 as c11, d2054 as c12, d2056 as c13 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d436 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d436;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec135"]:c5(),["SharedCodec156"]:c6(),["SharedCodec157"]:c7(),["SharedCodec158"]:c8(),["SharedCodec530"]:c9(),["SharedCodec531"]:c10(),["SharedCodec532"]:c11(),["SharedCodec533"]:c12(),["SharedCodec534"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
