import { d689 as c0, d690 as c1, d691 as c2, d704 as c3, d74 as c4, d1784 as c5, d1783 as c6, d2119 as c7, d2120 as c8, d693 as c9, d692 as c10, d695 as c11, d694 as c12, d697 as c13, d696 as c14, d699 as c15, d698 as c16, d701 as c17, d700 as c18, d703 as c19, d702 as c20 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d691 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationResponse"]:c2(),["DeliveryRevocationTarget"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec220"]:c9(),["SharedCodec221"]:c10(),["SharedCodec222"]:c11(),["SharedCodec223"]:c12(),["SharedCodec224"]:c13(),["SharedCodec225"]:c14(),["SharedCodec226"]:c15(),["SharedCodec227"]:c16(),["SharedCodec228"]:c17(),["SharedCodec229"]:c18(),["SharedCodec230"]:c19(),["SharedCodec231"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
