import { d2234 as c0, d2233 as c1, d2230 as c2, d2231 as c3, d2232 as c4, d2235 as c5 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2235 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2235;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec579"]:c0(),["SharedCodec580"]:c1(),["SharedCodec581"]:c2(),["SharedCodec582"]:c3(),["SharedCodec583"]:c4(),["UpdateInventoryTransferRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
