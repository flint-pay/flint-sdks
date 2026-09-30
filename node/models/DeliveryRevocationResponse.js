import { d640 as c0, d641 as c1, d642 as c2, d655 as c3, d69 as c4, d1646 as c5, d1645 as c6, d1959 as c7, d1960 as c8, d644 as c9, d643 as c10, d646 as c11, d645 as c12, d648 as c13, d647 as c14, d650 as c15, d649 as c16, d652 as c17, d651 as c18, d654 as c19, d653 as c20 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d642 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d642;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationResponse"]:c2(),["DeliveryRevocationTarget"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec199"]:c9(),["SharedCodec200"]:c10(),["SharedCodec201"]:c11(),["SharedCodec202"]:c12(),["SharedCodec203"]:c13(),["SharedCodec204"]:c14(),["SharedCodec205"]:c15(),["SharedCodec206"]:c16(),["SharedCodec207"]:c17(),["SharedCodec208"]:c18(),["SharedCodec209"]:c19(),["SharedCodec210"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
