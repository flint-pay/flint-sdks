import { d2126 as c0, d2125 as c1 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2126 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2126;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["StripePaymentClientAction"]:c0(),["StripeSetupIntentClientAction"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeStripePaymentClientAction(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
