import { d698 as c0, d699 as c1, d700 as c2, d713 as c3, d77 as c4, d1797 as c5, d1796 as c6, d2131 as c7, d2132 as c8, d14 as c9, d702 as c10, d701 as c11, d704 as c12, d703 as c13, d706 as c14, d705 as c15, d708 as c16, d707 as c17, d710 as c18, d709 as c19, d712 as c20, d711 as c21, d1795 as c22 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d700 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d700;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationResponse"]:c2(),["DeliveryRevocationTarget"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec226"]:c10(),["SharedCodec227"]:c11(),["SharedCodec228"]:c12(),["SharedCodec229"]:c13(),["SharedCodec230"]:c14(),["SharedCodec231"]:c15(),["SharedCodec232"]:c16(),["SharedCodec233"]:c17(),["SharedCodec234"]:c18(),["SharedCodec235"]:c19(),["SharedCodec236"]:c20(),["SharedCodec237"]:c21(),["SharedCodec485"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
