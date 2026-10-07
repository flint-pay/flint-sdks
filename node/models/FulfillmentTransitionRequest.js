import { d842 as c0, d829 as c1, d830 as c2, d831 as c3, d832 as c4, d833 as c5, d834 as c6, d835 as c7, d836 as c8, d837 as c9, d838 as c10, d839 as c11, d840 as c12, d841 as c13 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d842 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d842;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["FulfillmentTransitionRequest"]:c0(),["SharedCodec255"]:c1(),["SharedCodec256"]:c2(),["SharedCodec257"]:c3(),["SharedCodec258"]:c4(),["SharedCodec259"]:c5(),["SharedCodec260"]:c6(),["SharedCodec261"]:c7(),["SharedCodec262"]:c8(),["SharedCodec263"]:c9(),["SharedCodec264"]:c10(),["SharedCodec265"]:c11(),["SharedCodec266"]:c12(),["SharedCodec267"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeFulfillmentTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
