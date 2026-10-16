import { d690 as c0, d691 as c1, d692 as c2, d705 as c3, d323 as c4, d1823 as c5, d1824 as c6, d2178 as c7, d2179 as c8, d14 as c9, d694 as c10, d693 as c11, d696 as c12, d695 as c13, d698 as c14, d697 as c15, d700 as c16, d699 as c17, d702 as c18, d701 as c19, d704 as c20, d703 as c21, d1822 as c22 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d692 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d692;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationResponse"]:c2(),["DeliveryRevocationTarget"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec209"]:c10(),["SharedCodec210"]:c11(),["SharedCodec211"]:c12(),["SharedCodec212"]:c13(),["SharedCodec213"]:c14(),["SharedCodec214"]:c15(),["SharedCodec215"]:c16(),["SharedCodec216"]:c17(),["SharedCodec217"]:c18(),["SharedCodec218"]:c19(),["SharedCodec219"]:c20(),["SharedCodec220"]:c21(),["SharedCodec467"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
