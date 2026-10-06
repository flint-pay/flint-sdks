import { d698 as c0, d699 as c1, d713 as c2, d702 as c3, d701 as c4, d704 as c5, d703 as c6, d706 as c7, d705 as c8, d708 as c9, d707 as c10, d710 as c11, d709 as c12, d712 as c13, d711 as c14 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d698 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d698;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationTarget"]:c2(),["SharedCodec226"]:c3(),["SharedCodec227"]:c4(),["SharedCodec228"]:c5(),["SharedCodec229"]:c6(),["SharedCodec230"]:c7(),["SharedCodec231"]:c8(),["SharedCodec232"]:c9(),["SharedCodec233"]:c10(),["SharedCodec234"]:c11(),["SharedCodec235"]:c12(),["SharedCodec236"]:c13(),["SharedCodec237"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
