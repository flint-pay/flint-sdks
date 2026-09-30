import { d655 as c0, d644 as c1, d643 as c2, d646 as c3, d645 as c4, d648 as c5, d647 as c6, d650 as c7, d649 as c8, d652 as c9, d651 as c10, d654 as c11, d653 as c12 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d655 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d655;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["SharedCodec199"]:c1(),["SharedCodec200"]:c2(),["SharedCodec201"]:c3(),["SharedCodec202"]:c4(),["SharedCodec203"]:c5(),["SharedCodec204"]:c6(),["SharedCodec205"]:c7(),["SharedCodec206"]:c8(),["SharedCodec207"]:c9(),["SharedCodec208"]:c10(),["SharedCodec209"]:c11(),["SharedCodec210"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
