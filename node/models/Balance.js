import { d38 as c0, d69 as c1, d36 as c2, d37 as c3, d1666 as c4 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d38 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d38;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["Balance"]:c0(),["MoneyValue"]:c1(),["SharedCodec4"]:c2(),["SharedCodec5"]:c3(),["SignedMoney"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalance(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
