import { d655 as c0, d2077 as c1, d644 as c2, d643 as c3, d646 as c4, d645 as c5, d648 as c6, d647 as c7, d650 as c8, d649 as c9, d652 as c10, d651 as c11, d654 as c12, d653 as c13 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d2077 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2077;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["RevokeDeliveryDependencyRequest"]:c1(),["SharedCodec199"]:c2(),["SharedCodec200"]:c3(),["SharedCodec201"]:c4(),["SharedCodec202"]:c5(),["SharedCodec203"]:c6(),["SharedCodec204"]:c7(),["SharedCodec205"]:c8(),["SharedCodec206"]:c9(),["SharedCodec207"]:c10(),["SharedCodec208"]:c11(),["SharedCodec209"]:c12(),["SharedCodec210"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
