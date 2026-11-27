import { d8853 as c0 } from '../descriptors/data/397.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8857 as c1, d8858 as c3, d8859 as c4, d8860 as c5, d8861 as c6, d8862 as c7, d8863 as c8, d8864 as c9, d8865 as c10, d8866 as c11, d8867 as c12, d8868 as c13 } from '../descriptors/data/398.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c2 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8853 as d8853 } from '../descriptors/data/397.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8853;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec199"]:c3(),["SharedCodec200"]:c4(),["SharedCodec201"]:c5(),["SharedCodec202"]:c6(),["SharedCodec203"]:c7(),["SharedCodec204"]:c8(),["SharedCodec205"]:c9(),["SharedCodec206"]:c10(),["SharedCodec207"]:c11(),["SharedCodec208"]:c12(),["SharedCodec209"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
