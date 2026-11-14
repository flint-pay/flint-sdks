import { d52 as c0 } from '../descriptors/data/2.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7277 as c1 } from '../descriptors/data/340.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7323 as c2 } from '../descriptors/data/346.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7498 as c3, d7500 as c4, d7502 as c5, d7506 as c8, d7508 as c9, d7509 as c10, d7510 as c11, d7516 as c12 } from '../descriptors/data/357.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7523 as c6, d7524 as c13 } from '../descriptors/data/358.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7345 as c7 } from '../descriptors/data/349.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7444 as c14, d7445 as c15, d7446 as c16 } from '../descriptors/data/354.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d52 as d52 } from '../descriptors/data/2.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d52;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestResolution"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec100"]:c7(),["SharedCodec1463"]:c8(),["SharedCodec1465"]:c9(),["SharedCodec1466"]:c10(),["SharedCodec1467"]:c11(),["SharedCodec54"]:c12(),["SharedCodec55"]:c13(),["SharedCodec97"]:c14(),["SharedCodec98"]:c15(),["SharedCodec99"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
