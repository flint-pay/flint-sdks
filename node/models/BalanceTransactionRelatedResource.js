import { d52 as c0, d44 as c1, d45 as c2, d46 as c3, d47 as c4, d48 as c5, d43 as c6 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d52 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d52;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BalanceTransactionRelatedResource"]:c0(),["SharedCodec10"]:c1(),["SharedCodec11"]:c2(),["SharedCodec12"]:c3(),["SharedCodec13"]:c4(),["SharedCodec14"]:c5(),["SharedCodec9"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBalanceTransactionRelatedResource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
