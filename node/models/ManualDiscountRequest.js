import { d1605 as c0, d69 as c1 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d1605 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1605;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ManualDiscountRequest"]:c0(),["MoneyValue"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeManualDiscountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
