import { d3742 as c0, d3743 as c1, d3744 as c2, d3731 as c3, d3745 as c4, d3746 as c5, d3732 as c6, d3747 as c7, d3748 as c8, d3733 as c10, d3734 as c11, d3735 as c15, d3736 as c16, d3737 as c18 } from '../descriptors/data/158.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3749 as c9, d3756 as c12, d3758 as c14, d3759 as c17, d3761 as c19, d3764 as c20, d3765 as c21, d3766 as c22 } from '../descriptors/data/159.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d350 as c13 } from '../descriptors/data/21.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c23 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3781 as c24, d3782 as c25, d3789 as c26, d3790 as c27 } from '../descriptors/data/160.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3805 as c28, d3806 as c29, d3807 as c30 } from '../descriptors/data/161.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d350 as d350 } from '../descriptors/data/21.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d350;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCalculatedPricingStrategyRequest"]:c0(),["DeliveryCallbackPricingStrategyRequest"]:c1(),["DeliveryCallerSuppliedPricingStrategyRequest"]:c2(),["DeliveryCountryCondition"]:c3(),["DeliveryCustomerBooleanCondition"]:c4(),["DeliveryCustomerSegmentCondition"]:c5(),["DeliveryDistance"]:c6(),["DeliveryDistanceUnitPriceRequest"]:c7(),["DeliveryEligibilityExpression"]:c8(),["DeliveryFixedPricingStrategyRequest"]:c9(),["DeliveryPostalCodeCondition"]:c10(),["DeliveryPostalCodeValue"]:c11(),["DeliveryPricingRateRequest"]:c12(),["DeliveryPricingStrategyInputCallback"]:c13(),["DeliveryPricingTierBandRequest"]:c14(),["DeliveryRadiusCondition"]:c15(),["DeliveryRadiusOrigin"]:c16(),["DeliveryRateTablePricingStrategyRequest"]:c17(),["DeliveryStateCondition"]:c18(),["DeliveryTieredPricingStrategyRequest"]:c19(),["DeliveryWeightUnitPriceRequest"]:c20(),["DeliveryWindowTimeCondition"]:c21(),["DeliveryZoneCondition"]:c22(),["MoneyValue"]:c23(),["SharedCodec287"]:c24(),["SharedCodec288"]:c25(),["SharedCodec307"]:c26(),["SharedCodec308"]:c27(),["SharedCodec367"]:c28(),["SharedCodec368"]:c29(),["SharedCodec369"]:c30()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPricingStrategyInputCallback(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
