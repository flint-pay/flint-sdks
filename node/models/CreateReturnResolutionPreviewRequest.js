import { d8383 as c0 } from '../descriptors/data/408.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6574 as c1, d6575 as c2 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c3 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8404 as c4, d8405 as c5, d8396 as c8, d8397 as c9, d8398 as c10, d8399 as c11, d8400 as c12, d8406 as c13, d8407 as c14 } from '../descriptors/data/410.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7523 as c6, d7524 as c22 } from '../descriptors/data/358.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6685 as c7 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8408 as c15, d8409 as c16, d8410 as c18, d8411 as c20, d8412 as c21 } from '../descriptors/data/411.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8393 as c17, d8394 as c19 } from '../descriptors/data/409.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8383 as d8383 } from '../descriptors/data/408.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8383;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["ReturnReplacementLineItemRequest"]:c4(),["ReturnResolutionAdjustmentRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec122"]:c7(),["SharedCodec1525"]:c8(),["SharedCodec1526"]:c9(),["SharedCodec1527"]:c10(),["SharedCodec1528"]:c11(),["SharedCodec1529"]:c12(),["SharedCodec1530"]:c13(),["SharedCodec1531"]:c14(),["SharedCodec1532"]:c15(),["SharedCodec400"]:c16(),["SharedCodec401"]:c17(),["SharedCodec402"]:c18(),["SharedCodec403"]:c19(),["SharedCodec404"]:c20(),["SharedCodec405"]:c21(),["SharedCodec55"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
