import { d8069 as c0, d8070 as c1, d8072 as c2, d8073 as c3, d8074 as c4, d8075 as c9 } from '../descriptors/data/351.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7867 as c5, d7868 as c6, d7859 as c34, d7860 as c35, d7858 as c36 } from '../descriptors/data/339.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8501 as c7, d8498 as c19, d8499 as c20, d8500 as c21 } from '../descriptors/data/374.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7730 as c8 } from '../descriptors/data/330.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9922 as c10, d9925 as c11, d9927 as c12, d9930 as c13, d9932 as c14 } from '../descriptors/data/457.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9935 as c15, d9938 as c16, d9943 as c17 } from '../descriptors/data/458.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8883 as c18 } from '../descriptors/data/398.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9958 as c22 } from '../descriptors/data/459.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9963 as c23, d9964 as c24, d9966 as c25, d9967 as c26, d9968 as c27, d9969 as c28, d9970 as c29, d9971 as c30 } from '../descriptors/data/460.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9972 as c31, d9973 as c32, d9974 as c33 } from '../descriptors/data/461.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d8198 as c37 } from '../descriptors/data/358.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9510 as c38, d9511 as c39 } from '../descriptors/data/434.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d9979 as c40, d9980 as c41 } from '../descriptors/data/462.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7614 as c42 } from '../descriptors/data/320.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { d7614 as d7614 } from '../descriptors/data/320.js?sdk=297b041a019868602c5b063a3c1ea0279157240bcdcdf6a0298b2353ac58c07c';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7614;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["SharedCodec138"]:c18(),["SharedCodec1479"]:c19(),["SharedCodec1480"]:c20(),["SharedCodec1481"]:c21(),["SharedCodec2136"]:c22(),["SharedCodec2141"]:c23(),["SharedCodec2142"]:c24(),["SharedCodec2144"]:c25(),["SharedCodec2160"]:c26(),["SharedCodec2161"]:c27(),["SharedCodec2162"]:c28(),["SharedCodec2163"]:c29(),["SharedCodec2164"]:c30(),["SharedCodec2165"]:c31(),["SharedCodec2166"]:c32(),["SharedCodec2167"]:c33(),["SharedCodec3066"]:c34(),["SharedCodec3067"]:c35(),["SharedCodec3068"]:c36(),["SharedCodec3072"]:c37(),["SharedCodec3118"]:c38(),["SharedCodec3119"]:c39(),["SharedCodec3147"]:c40(),["SharedCodec3148"]:c41(),["UpdatePaymentLinkRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
