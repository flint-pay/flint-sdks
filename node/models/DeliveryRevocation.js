import { d707 as c0, d708 as c1, d722 as c2, d711 as c3, d710 as c4, d713 as c5, d712 as c6, d715 as c7, d714 as c8, d717 as c9, d716 as c10, d719 as c11, d718 as c12, d721 as c13, d720 as c14 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d707 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d707;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationTarget"]:c2(),["SharedCodec227"]:c3(),["SharedCodec228"]:c4(),["SharedCodec229"]:c5(),["SharedCodec230"]:c6(),["SharedCodec231"]:c7(),["SharedCodec232"]:c8(),["SharedCodec233"]:c9(),["SharedCodec234"]:c10(),["SharedCodec235"]:c11(),["SharedCodec236"]:c12(),["SharedCodec237"]:c13(),["SharedCodec238"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
