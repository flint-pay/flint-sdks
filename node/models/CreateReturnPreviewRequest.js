import { d418 as c0, d426 as c1, d436 as c2, d69 as c3, d1972 as c4, d2016 as c5, d2058 as c6, d2061 as c7, d2066 as c8, d366 as c9, d423 as c10, d424 as c11, d433 as c12, d435 as c13, d434 as c14, d1970 as c15, d1971 as c16, d2053 as c17, d2052 as c18, d2055 as c19, d2054 as c20, d2056 as c21 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d426 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d426;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityCheckRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilitySelection"]:c4(),["ReturnLineItemRequest"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec135"]:c9(),["SharedCodec154"]:c10(),["SharedCodec155"]:c11(),["SharedCodec156"]:c12(),["SharedCodec157"]:c13(),["SharedCodec158"]:c14(),["SharedCodec483"]:c15(),["SharedCodec484"]:c16(),["SharedCodec530"]:c17(),["SharedCodec531"]:c18(),["SharedCodec532"]:c19(),["SharedCodec533"]:c20(),["SharedCodec534"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
