import { d6616 as c0 } from '../descriptors/data/303.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6620 as c1, d6621 as c3, d6622 as c4, d6623 as c5, d6624 as c6, d6625 as c7, d6626 as c8, d6627 as c9, d6628 as c10, d6629 as c11, d6630 as c12, d6631 as c13 } from '../descriptors/data/304.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6616 as d6616 } from '../descriptors/data/303.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6616;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec128"]:c3(),["SharedCodec129"]:c4(),["SharedCodec130"]:c5(),["SharedCodec131"]:c6(),["SharedCodec132"]:c7(),["SharedCodec133"]:c8(),["SharedCodec134"]:c9(),["SharedCodec135"]:c10(),["SharedCodec136"]:c11(),["SharedCodec137"]:c12(),["SharedCodec138"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
