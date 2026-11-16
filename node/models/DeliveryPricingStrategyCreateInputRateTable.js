import { d7273 as c0, d7274 as c1, d7275 as c2, d7262 as c3, d7276 as c4, d7277 as c5, d7263 as c6, d7278 as c7, d7279 as c8, d7264 as c10, d7265 as c11, d7266 as c15, d7267 as c16, d7268 as c18 } from '../descriptors/data/332.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7280 as c9, d7289 as c14, d7293 as c19, d7296 as c20, d7297 as c21, d7298 as c22 } from '../descriptors/data/333.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7190 as c12, d7195 as c17 } from '../descriptors/data/328.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d516 as c13 } from '../descriptors/data/30.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c23 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7314 as c24, d7315 as c25 } from '../descriptors/data/334.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7328 as c26, d7329 as c27, d7338 as c28, d7339 as c29, d7340 as c30 } from '../descriptors/data/335.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d516 as d516 } from '../descriptors/data/30.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d516;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryConditionRequest"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistanceRequest"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpressionRequest"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeConditionRequest"]:c10(),["DeliveryPostalCodeValueRequest"]:c11(),["DeliveryPricingRateCreateRequest"]:c12(),["DeliveryPricingStrategyCreateInputRateTable"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusConditionRequest"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyCreateRequest"]:c17(),["DeliveryStateConditionRequest"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneConditionRequest"]:c22(),["MoneyValue"]:c23(),["SharedCodec656"]:c24(),["SharedCodec657"]:c25(),["SharedCodec718"]:c26(),["SharedCodec719"]:c27(),["SharedCodec824"]:c28(),["SharedCodec825"]:c29(),["SharedCodec826"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyCreateInputRateTable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
