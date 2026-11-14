import { d6574 as c0, d6575 as c1 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c2 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c3 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8461 as c4 } from '../descriptors/data/414.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1236 as c5 } from '../descriptors/data/60.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8469 as c6, d8470 as c7, d8471 as c8, d8472 as c9, d8473 as c10 } from '../descriptors/data/415.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8404 as c11, d8396 as c19, d8397 as c20, d8398 as c21, d8399 as c22, d8400 as c23, d8406 as c24, d8407 as c25 } from '../descriptors/data/410.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8477 as c12, d8480 as c17, d8481 as c18 } from '../descriptors/data/416.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6685 as c13 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8337 as c14, d8338 as c15, d8339 as c16 } from '../descriptors/data/405.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8408 as c26, d8409 as c28 } from '../descriptors/data/411.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7015 as c27 } from '../descriptors/data/328.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8530 as c29 } from '../descriptors/data/418.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1236 as d1236 } from '../descriptors/data/60.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1236;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ProcessExistingReturnRequest"]:c5(),["ReturnProcessDecision"]:c6(),["ReturnProcessDispositionRequest"]:c7(),["ReturnProcessInspectionRequest"]:c8(),["ReturnProcessReceiptRequest"]:c9(),["ReturnProcessResolutionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnSourceSystemRequest"]:c12(),["SharedCodec122"]:c13(),["SharedCodec1470"]:c14(),["SharedCodec1471"]:c15(),["SharedCodec1472"]:c16(),["SharedCodec1483"]:c17(),["SharedCodec1484"]:c18(),["SharedCodec1525"]:c19(),["SharedCodec1526"]:c20(),["SharedCodec1527"]:c21(),["SharedCodec1528"]:c22(),["SharedCodec1529"]:c23(),["SharedCodec1530"]:c24(),["SharedCodec1531"]:c25(),["SharedCodec1532"]:c26(),["SharedCodec306"]:c27(),["SharedCodec400"]:c28(),["SharedCodec406"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
