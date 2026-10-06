import { d713 as c0, d702 as c1, d701 as c2, d704 as c3, d703 as c4, d706 as c5, d705 as c6, d708 as c7, d707 as c8, d710 as c9, d709 as c10, d712 as c11, d711 as c12 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d713 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d713;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["SharedCodec226"]:c1(),["SharedCodec227"]:c2(),["SharedCodec228"]:c3(),["SharedCodec229"]:c4(),["SharedCodec230"]:c5(),["SharedCodec231"]:c6(),["SharedCodec232"]:c7(),["SharedCodec233"]:c8(),["SharedCodec234"]:c9(),["SharedCodec235"]:c10(),["SharedCodec236"]:c11(),["SharedCodec237"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
