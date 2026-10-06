import { d722 as c0, d711 as c1, d710 as c2, d713 as c3, d712 as c4, d715 as c5, d714 as c6, d717 as c7, d716 as c8, d719 as c9, d718 as c10, d721 as c11, d720 as c12 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d722 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d722;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["SharedCodec227"]:c1(),["SharedCodec228"]:c2(),["SharedCodec229"]:c3(),["SharedCodec230"]:c4(),["SharedCodec231"]:c5(),["SharedCodec232"]:c6(),["SharedCodec233"]:c7(),["SharedCodec234"]:c8(),["SharedCodec235"]:c9(),["SharedCodec236"]:c10(),["SharedCodec237"]:c11(),["SharedCodec238"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
