import { d680 as c0, d681 as c1 } from '../descriptors/data/38.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d688 as c2 } from '../descriptors/data/39.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c3 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1943 as c4, d1944 as c5, d1945 as c6 } from '../descriptors/data/96.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d1947 as c7, d1948 as c8, d1949 as c9 } from '../descriptors/data/97.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8735 as c10, d8737 as c11, d8738 as c12, d8741 as c13 } from '../descriptors/data/387.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d680 as d680 } from '../descriptors/data/38.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d680;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec1027"]:c4(),["SharedCodec1028"]:c5(),["SharedCodec1029"]:c6(),["SharedCodec1030"]:c7(),["SharedCodec1031"]:c8(),["SharedCodec1032"]:c9(),["SharedCodec200"]:c10(),["SharedCodec202"]:c11(),["SharedCodec203"]:c12(),["SharedCodec206"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
