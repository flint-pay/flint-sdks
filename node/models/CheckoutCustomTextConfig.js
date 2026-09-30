import { d163 as c0, d164 as c1 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d163 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d163;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutCustomTextConfig"]:c0(),["CheckoutCustomTextWriteConfig"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutCustomTextConfig(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
