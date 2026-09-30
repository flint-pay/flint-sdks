import { d640 as c0, d641 as c1, d655 as c2, d644 as c3, d643 as c4, d646 as c5, d645 as c6, d648 as c7, d647 as c8, d650 as c9, d649 as c10, d652 as c11, d651 as c12, d654 as c13, d653 as c14 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d640 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d640;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationTarget"]:c2(),["SharedCodec199"]:c3(),["SharedCodec200"]:c4(),["SharedCodec201"]:c5(),["SharedCodec202"]:c6(),["SharedCodec203"]:c7(),["SharedCodec204"]:c8(),["SharedCodec205"]:c9(),["SharedCodec206"]:c10(),["SharedCodec207"]:c11(),["SharedCodec208"]:c12(),["SharedCodec209"]:c13(),["SharedCodec210"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
