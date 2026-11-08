import { d4965 as c0, d4966 as c1, d4967 as c2, d4968 as c4, d4969 as c5, d4970 as c7, d4971 as c8, d4972 as c9, d4957 as c11, d4958 as c18, d4959 as c26, d4960 as c27 } from '../descriptors/data/218.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4954 as c3, d4955 as c6, d4956 as c10 } from '../descriptors/data/217.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d446 as c12, d451 as c13 } from '../descriptors/data/24.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4981 as c14, d4982 as c15, d4983 as c16, d4986 as c19, d4989 as c20, d4990 as c21, d4991 as c22 } from '../descriptors/data/219.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d503 as c17 } from '../descriptors/data/27.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c23 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5007 as c24, d5008 as c25, d5009 as c28, d5012 as c29 } from '../descriptors/data/220.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5017 as c30, d5018 as c31, d5033 as c32, d5034 as c33 } from '../descriptors/data/221.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5035 as c34 } from '../descriptors/data/222.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d451 as d451 } from '../descriptors/data/24.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d451;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryCondition"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistance"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpression"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeCondition"]:c10(),["DeliveryPostalCodeValue"]:c11(),["DeliveryPricingRateCreateRequest"]:c12(),["DeliveryPricingStrategyCreateInputCallback"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusCondition"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyCreateRequest"]:c17(),["DeliveryStateCondition"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneCondition"]:c22(),["MoneyValue"]:c23(),["SharedCodec387"]:c24(),["SharedCodec388"]:c25(),["SharedCodec389"]:c26(),["SharedCodec390"]:c27(),["SharedCodec391"]:c28(),["SharedCodec410"]:c29(),["SharedCodec431"]:c30(),["SharedCodec432"]:c31(),["SharedCodec515"]:c32(),["SharedCodec516"]:c33(),["SharedCodec517"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyCreateInputCallback(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
