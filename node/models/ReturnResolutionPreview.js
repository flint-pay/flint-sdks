import { d69 as c0, d1965 as c1, d2051 as c2, d2060 as c3, d2064 as c4, d2067 as c5, d2068 as c6 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2067 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2067;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnActor"]:c1(),["ReturnReplacementLineItem"]:c2(),["ReturnResolutionAdjustment"]:c3(),["ReturnResolutionLineItem"]:c4(),["ReturnResolutionPreview"]:c5(),["ReturnResolutionWarning"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnResolutionPreview(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
