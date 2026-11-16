import { d7262 as c0, d7276 as c1, d7277 as c2, d7263 as c3, d7279 as c4, d7264 as c5, d7265 as c6, d7266 as c8, d7267 as c9, d7268 as c10 } from '../descriptors/data/332.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7287 as c7, d7297 as c11, d7298 as c12 } from '../descriptors/data/333.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c13 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7314 as c14, d7315 as c15 } from '../descriptors/data/334.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7287 as d7287 } from '../descriptors/data/333.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7287;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryConditionRequest"]:c0(),["DeliveryCustomerBooleanCondition"]:c1(),["DeliveryCustomerSegmentCondition"]:c2(),["DeliveryDistanceRequest"]:c3(),["DeliveryEligibilityExpressionRequest"]:c4(),["DeliveryPostalCodeConditionRequest"]:c5(),["DeliveryPostalCodeValueRequest"]:c6(),["DeliveryPricingRateRequest"]:c7(),["DeliveryRadiusConditionRequest"]:c8(),["DeliveryRadiusOrigin"]:c9(),["DeliveryStateConditionRequest"]:c10(),["DeliveryWindowTimeCondition"]:c11(),["DeliveryZoneConditionRequest"]:c12(),["MoneyValue"]:c13(),["SharedCodec656"]:c14(),["SharedCodec657"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingRateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
