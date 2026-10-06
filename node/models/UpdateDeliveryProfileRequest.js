import { d681 as c0, d675 as c1, d665 as c2, d673 as c3, d674 as c4, d677 as c5, d676 as c6, d678 as c7, d680 as c8, d679 as c9, d2412 as c10, d2420 as c11, d667 as c12 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d2420 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2420;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["Dimensions"]:c2(),["SharedCodec220"]:c3(),["SharedCodec221"]:c4(),["SharedCodec222"]:c5(),["SharedCodec223"]:c6(),["SharedCodec224"]:c7(),["SharedCodec225"]:c8(),["SharedCodec226"]:c9(),["SharedCodec631"]:c10(),["UpdateDeliveryProfileRequest"]:c11(),["Weight"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
