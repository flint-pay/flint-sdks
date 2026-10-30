import { d4934 as c0, d4935 as c1, d4936 as c2, d4937 as c4, d4938 as c5, d4939 as c7, d4940 as c8, d4941 as c9, d4926 as c11, d4927 as c18, d4928 as c26, d4929 as c27 } from '../descriptors/data/217.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4923 as c3, d4924 as c6, d4925 as c10 } from '../descriptors/data/216.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d441 as c12, d445 as c13 } from '../descriptors/data/24.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4950 as c14, d4951 as c15, d4952 as c16, d4955 as c19, d4958 as c20, d4959 as c21, d4960 as c22 } from '../descriptors/data/218.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d498 as c17 } from '../descriptors/data/26.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4281 as c23 } from '../descriptors/data/180.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4976 as c24, d4977 as c25, d4978 as c28, d4981 as c29 } from '../descriptors/data/219.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d4984 as c30, d4985 as c31, d5002 as c32, d5003 as c33 } from '../descriptors/data/220.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d5004 as c34 } from '../descriptors/data/221.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { d445 as d445 } from '../descriptors/data/24.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d445;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryCondition"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistance"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpression"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeCondition"]:c10(),["DeliveryPostalCodeValue"]:c11(),["DeliveryPricingRateCreateRequest"]:c12(),["DeliveryPricingStrategyCreateInputCalculated"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusCondition"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyCreateRequest"]:c17(),["DeliveryStateCondition"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneCondition"]:c22(),["MoneyValue"]:c23(),["SharedCodec385"]:c24(),["SharedCodec386"]:c25(),["SharedCodec387"]:c26(),["SharedCodec388"]:c27(),["SharedCodec389"]:c28(),["SharedCodec408"]:c29(),["SharedCodec426"]:c30(),["SharedCodec427"]:c31(),["SharedCodec513"]:c32(),["SharedCodec514"]:c33(),["SharedCodec515"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyCreateInputCalculated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
