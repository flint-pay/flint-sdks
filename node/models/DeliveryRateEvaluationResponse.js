import { d680 as c0, d681 as c1 } from '../descriptors/data/38.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d687 as c2, d688 as c3 } from '../descriptors/data/39.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c4 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1943 as c5, d1944 as c6, d1945 as c7 } from '../descriptors/data/96.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1947 as c8, d1948 as c9, d1949 as c10 } from '../descriptors/data/97.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8735 as c11, d8737 as c12, d8738 as c13, d8741 as c14 } from '../descriptors/data/387.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d687 as d687 } from '../descriptors/data/39.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d687;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationResponse"]:c2(),["DeliveryRateEvaluationWindow"]:c3(),["MoneyValue"]:c4(),["SharedCodec1027"]:c5(),["SharedCodec1028"]:c6(),["SharedCodec1029"]:c7(),["SharedCodec1030"]:c8(),["SharedCodec1031"]:c9(),["SharedCodec1032"]:c10(),["SharedCodec200"]:c11(),["SharedCodec202"]:c12(),["SharedCodec203"]:c13(),["SharedCodec206"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
