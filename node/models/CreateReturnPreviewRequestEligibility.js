import { d7498 as c0, d7500 as c6, d7502 as c7, d7506 as c12, d7508 as c13, d7509 as c14, d7510 as c15, d7515 as c30 } from '../descriptors/data/357.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d349 as c1 } from '../descriptors/data/22.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8383 as c2 } from '../descriptors/data/408.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6574 as c3, d6575 as c4 } from '../descriptors/data/301.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c5 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8404 as c8, d8405 as c9, d8396 as c16, d8397 as c17, d8398 as c18, d8399 as c19, d8400 as c20, d8406 as c21, d8407 as c22 } from '../descriptors/data/410.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7523 as c10, d7524 as c31 } from '../descriptors/data/358.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6685 as c11 } from '../descriptors/data/308.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8408 as c23, d8409 as c24, d8410 as c26, d8411 as c28, d8412 as c29 } from '../descriptors/data/411.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8393 as c25, d8394 as c27 } from '../descriptors/data/409.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d349 as d349 } from '../descriptors/data/22.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d349;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestEligibility"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec122"]:c11(),["SharedCodec1463"]:c12(),["SharedCodec1465"]:c13(),["SharedCodec1466"]:c14(),["SharedCodec1467"]:c15(),["SharedCodec1525"]:c16(),["SharedCodec1526"]:c17(),["SharedCodec1527"]:c18(),["SharedCodec1528"]:c19(),["SharedCodec1529"]:c20(),["SharedCodec1530"]:c21(),["SharedCodec1531"]:c22(),["SharedCodec1532"]:c23(),["SharedCodec400"]:c24(),["SharedCodec401"]:c25(),["SharedCodec402"]:c26(),["SharedCodec403"]:c27(),["SharedCodec404"]:c28(),["SharedCodec405"]:c29(),["SharedCodec52"]:c30(),["SharedCodec55"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
