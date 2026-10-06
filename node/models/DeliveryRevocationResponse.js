import { d707 as c0, d708 as c1, d709 as c2, d722 as c3, d77 as c4, d1823 as c5, d1822 as c6, d2157 as c7, d2158 as c8, d14 as c9, d711 as c10, d710 as c11, d713 as c12, d712 as c13, d715 as c14, d714 as c15, d717 as c16, d716 as c17, d719 as c18, d718 as c19, d721 as c20, d720 as c21, d1821 as c22 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d709 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d709;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationResponse"]:c2(),["DeliveryRevocationTarget"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec227"]:c10(),["SharedCodec228"]:c11(),["SharedCodec229"]:c12(),["SharedCodec230"]:c13(),["SharedCodec231"]:c14(),["SharedCodec232"]:c15(),["SharedCodec233"]:c16(),["SharedCodec234"]:c17(),["SharedCodec235"]:c18(),["SharedCodec236"]:c19(),["SharedCodec237"]:c20(),["SharedCodec238"]:c21(),["SharedCodec487"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
