import { d361 as c0 } from '../descriptors/data/22.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6574 as c1, d6575 as c2 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c3 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c4 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8404 as c5, d8405 as c6, d8396 as c9, d8397 as c10, d8398 as c11, d8399 as c12, d8400 as c13, d8406 as c14, d8407 as c15 } from '../descriptors/data/410.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7523 as c7, d7524 as c20 } from '../descriptors/data/358.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6685 as c8 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8408 as c16, d8409 as c17, d8410 as c18 } from '../descriptors/data/411.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8530 as c19 } from '../descriptors/data/418.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d361 as d361 } from '../descriptors/data/22.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d361;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequestStandard"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MetadataRequest"]:c3(),["MoneyValue"]:c4(),["ReturnReplacementLineItemRequest"]:c5(),["ReturnResolutionAdjustmentRequest"]:c6(),["ReturnResolutionLineItemRequest"]:c7(),["SharedCodec122"]:c8(),["SharedCodec1525"]:c9(),["SharedCodec1526"]:c10(),["SharedCodec1527"]:c11(),["SharedCodec1528"]:c12(),["SharedCodec1529"]:c13(),["SharedCodec1530"]:c14(),["SharedCodec1531"]:c15(),["SharedCodec1532"]:c16(),["SharedCodec400"]:c17(),["SharedCodec402"]:c18(),["SharedCodec406"]:c19(),["SharedCodec55"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequestStandard(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
