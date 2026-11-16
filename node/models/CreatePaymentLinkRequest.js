import { d8069 as c0, d8070 as c1, d8064 as c2, d8072 as c3, d8073 as c4, d8074 as c5, d8075 as c12 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d349 as c6 } from '../descriptors/data/20.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7867 as c7, d7868 as c8 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7874 as c9 } from '../descriptors/data/340.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8501 as c10, d8498 as c20, d8499 as c21, d8500 as c22 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c11 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9923 as c13, d9924 as c14, d9928 as c15, d9929 as c16 } from '../descriptors/data/457.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9933 as c17, d9934 as c18, d9942 as c19 } from '../descriptors/data/458.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9958 as c23 } from '../descriptors/data/459.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9963 as c24, d9964 as c25, d9966 as c26, d9967 as c27, d9968 as c28, d9969 as c29, d9970 as c30 } from '../descriptors/data/460.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9975 as c31, d9976 as c32 } from '../descriptors/data/461.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9977 as c33, d9978 as c34 } from '../descriptors/data/462.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9990 as c35, d9991 as c36 } from '../descriptors/data/463.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d349 as d349 } from '../descriptors/data/20.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d349;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["SharedCodec1479"]:c20(),["SharedCodec1480"]:c21(),["SharedCodec1481"]:c22(),["SharedCodec2136"]:c23(),["SharedCodec2141"]:c24(),["SharedCodec2142"]:c25(),["SharedCodec2144"]:c26(),["SharedCodec2160"]:c27(),["SharedCodec2161"]:c28(),["SharedCodec2162"]:c29(),["SharedCodec2163"]:c30(),["SharedCodec2170"]:c31(),["SharedCodec2171"]:c32(),["SharedCodec2172"]:c33(),["SharedCodec2173"]:c34(),["SharedCodec541"]:c35(),["SharedCodec542"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
