import { d7957 as c0, d7955 as c20, d7956 as c23 } from '../descriptors/data/345.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8069 as c1, d8070 as c6, d8064 as c7, d8071 as c8, d8072 as c9, d8073 as c10, d8074 as c11, d8068 as c16, d8058 as c17, d8059 as c18, d8060 as c19, d8066 as c21, d8067 as c22, d8076 as c24, d8061 as c26, d8062 as c27, d8063 as c28 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7886 as c2, d7887 as c3, d7888 as c4, d7889 as c5 } from '../descriptors/data/340.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7893 as c12 } from '../descriptors/data/341.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d246 as c13 } from '../descriptors/data/11.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7857 as c14 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c15 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8077 as c25, d8078 as c34 } from '../descriptors/data/352.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7911 as c29, d7912 as c30, d7913 as c31 } from '../descriptors/data/342.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7929 as c32, d7930 as c33 } from '../descriptors/data/343.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7936 as c35 } from '../descriptors/data/344.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d246 as d246 } from '../descriptors/data/11.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d246;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeRequest"]:c16(),["PromotionRefInputPromotionCode"]:c17(),["PromotionRefInputPromotionID"]:c18(),["PromotionRefRequest"]:c19(),["SharedCodec2"]:c20(),["SharedCodec238"]:c21(),["SharedCodec239"]:c22(),["SharedCodec3"]:c23(),["SharedCodec327"]:c24(),["SharedCodec328"]:c25(),["SharedCodec361"]:c26(),["SharedCodec362"]:c27(),["SharedCodec363"]:c28(),["SharedCodec364"]:c29(),["SharedCodec365"]:c30(),["SharedCodec366"]:c31(),["SharedCodec376"]:c32(),["SharedCodec377"]:c33(),["SubscriptionPlanChangeLineItemRequest"]:c34(),["ThemeConfigRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
