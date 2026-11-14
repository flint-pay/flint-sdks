import { d6615 as c0, d6616 as c1 } from '../descriptors/data/303.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d205 as c2 } from '../descriptors/data/9.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6535 as c3, d6536 as c4, d6541 as c5, d6537 as c20, d6542 as c21, d6543 as c22, d6538 as c23, d6539 as c24 } from '../descriptors/data/299.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d477 as c6 } from '../descriptors/data/28.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6620 as c7, d6621 as c9, d6622 as c10, d6623 as c11, d6624 as c12, d6625 as c13, d6626 as c14, d6627 as c15, d6628 as c16, d6629 as c17, d6630 as c18, d6631 as c19 } from '../descriptors/data/304.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c8 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d205 as d205 } from '../descriptors/data/9.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d205;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["CreateCheckoutDeliveryQuoteRequest"]:c2(),["DeliveryAddressRequest"]:c3(),["DeliveryBuyerLocationRequest"]:c4(),["DeliveryCoordinateRequest"]:c5(),["DeliveryInventoryAssignmentRequest"]:c6(),["DeliveryWindowRequest"]:c7(),["MoneyValue"]:c8(),["SharedCodec128"]:c9(),["SharedCodec129"]:c10(),["SharedCodec130"]:c11(),["SharedCodec131"]:c12(),["SharedCodec132"]:c13(),["SharedCodec133"]:c14(),["SharedCodec134"]:c15(),["SharedCodec135"]:c16(),["SharedCodec136"]:c17(),["SharedCodec137"]:c18(),["SharedCodec138"]:c19(),["SharedCodec506"]:c20(),["SharedCodec507"]:c21(),["SharedCodec508"]:c22(),["SharedCodec509"]:c23(),["SharedCodec510"]:c24()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutDeliveryQuoteRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
