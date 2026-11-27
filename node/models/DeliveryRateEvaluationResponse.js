import { d684 as c0, d685 as c1 } from '../descriptors/data/38.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d691 as c2, d692 as c3 } from '../descriptors/data/39.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c4 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d1975 as c5, d1976 as c6, d1977 as c7, d1978 as c8, d1979 as c9, d1981 as c10 } from '../descriptors/data/98.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8862 as c11, d8864 as c12, d8865 as c13, d8868 as c14 } from '../descriptors/data/398.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d691 as d691 } from '../descriptors/data/39.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec1065"]:c5(),["SharedCodec1066"]:c6(),["SharedCodec1067"]:c7(),["SharedCodec1068"]:c8(),["SharedCodec1069"]:c9(),["SharedCodec1070"]:c10(),["SharedCodec203"]:c11(),["SharedCodec205"]:c12(),["SharedCodec206"]:c13(),["SharedCodec209"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
