import { d5918 as c0 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c1 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6135 as c2 } from '../descriptors/data/278.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6689 as c3, d6685 as c4 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8693 as c5, d8694 as c6, d8695 as c7, d8696 as c8, d8700 as c9, d8701 as c10, d8702 as c11 } from '../descriptors/data/426.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6576 as c12, d6577 as c13, d6578 as c14, d6579 as c15, d6580 as c16, d6581 as c17 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6582 as c18, d6583 as c19 } from '../descriptors/data/302.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5849 as c20 } from '../descriptors/data/260.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8718 as c21 } from '../descriptors/data/428.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8718 as d8718 } from '../descriptors/data/428.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8718;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderLineItemTaxRequest"]:c2(),["SharedCodec121"]:c3(),["SharedCodec122"]:c4(),["SharedCodec1627"]:c5(),["SharedCodec1628"]:c6(),["SharedCodec1629"]:c7(),["SharedCodec1630"]:c8(),["SharedCodec1826"]:c9(),["SharedCodec1827"]:c10(),["SharedCodec1828"]:c11(),["SharedCodec335"]:c12(),["SharedCodec336"]:c13(),["SharedCodec337"]:c14(),["SharedCodec338"]:c15(),["SharedCodec339"]:c16(),["SharedCodec351"]:c17(),["SharedCodec352"]:c18(),["SharedCodec353"]:c19(),["TextModifierRequest"]:c20(),["UpdateSubscriptionPlanLineItemRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
