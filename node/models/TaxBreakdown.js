import { d37 as c0, d2162 as c1, d2163 as c2, d2164 as c3, d2165 as c4 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2165 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2165;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec5"]:c0(),["SharedCodec552"]:c1(),["SharedCodec553"]:c2(),["SharedCodec554"]:c3(),["TaxBreakdown"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxBreakdown(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
