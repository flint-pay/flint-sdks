import { d681 as c0 } from '../descriptors/data/38.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d688 as c1 } from '../descriptors/data/39.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c2 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1943 as c3, d1944 as c4, d1945 as c5 } from '../descriptors/data/96.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d1947 as c6, d1948 as c7, d1949 as c8 } from '../descriptors/data/97.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8735 as c9, d8737 as c10, d8738 as c11, d8741 as c12 } from '../descriptors/data/386.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d681 as d681 } from '../descriptors/data/38.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d681;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec1027"]:c3(),["SharedCodec1028"]:c4(),["SharedCodec1029"]:c5(),["SharedCodec1030"]:c6(),["SharedCodec1031"]:c7(),["SharedCodec1032"]:c8(),["SharedCodec200"]:c9(),["SharedCodec202"]:c10(),["SharedCodec203"]:c11(),["SharedCodec206"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
