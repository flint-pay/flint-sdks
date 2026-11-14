import { d6574 as c0, d6575 as c1 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6685 as c3 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8396 as c4, d8397 as c5, d8398 as c6, d8399 as c7, d8400 as c8 } from '../descriptors/data/410.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5919 as c9 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6017 as c10 } from '../descriptors/data/271.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6255 as c11 } from '../descriptors/data/284.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8432 as c12, d8433 as c13, d8434 as c14, d8435 as c15, d8436 as c16 } from '../descriptors/data/412.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8453 as c17, d8454 as c18, d8455 as c19 } from '../descriptors/data/413.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5710 as c20 } from '../descriptors/data/251.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5710 as d5710 } from '../descriptors/data/251.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5710;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["SharedCodec122"]:c3(),["SharedCodec1525"]:c4(),["SharedCodec1526"]:c5(),["SharedCodec1527"]:c6(),["SharedCodec1528"]:c7(),["SharedCodec1529"]:c8(),["SharedCodec1697"]:c9(),["SharedCodec1700"]:c10(),["SharedCodec1701"]:c11(),["SharedCodec1795"]:c12(),["SharedCodec1796"]:c13(),["SharedCodec1797"]:c14(),["SharedCodec1798"]:c15(),["SharedCodec1799"]:c16(),["UpdateReturnReplacementLineItemRequest"]:c17(),["UpdateReturnResolutionAdjustmentRequest"]:c18(),["UpdateReturnResolutionLineItemRequest"]:c19(),["UpdateReturnResolutionRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
