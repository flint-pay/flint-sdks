import { d8146 as c0, d8144 as c22, d8145 as c23 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8261 as c1, d8262 as c6, d8255 as c8, d8264 as c9, d8265 as c10, d8266 as c11, d8267 as c16, d8260 as c17, d8259 as c18, d8249 as c19, d8250 as c20, d8251 as c21, d8252 as c24, d8253 as c25, d8254 as c26 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8075 as c2, d8076 as c3, d8077 as c4, d8078 as c5, d8079 as c7, d8082 as c12 } from '../descriptors/data/353.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d251 as c13 } from '../descriptors/data/11.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c14 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c15 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8099 as c27, d8100 as c28, d8101 as c29 } from '../descriptors/data/354.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8106 as c30, d8108 as c31 } from '../descriptors/data/355.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8125 as c32 } from '../descriptors/data/356.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d251 as d251 } from '../descriptors/data/11.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d251;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionQuickPay"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["OrderLineItemTaxRequest"]:c16(),["PlatformFeeMoney"]:c17(),["PlatformFeeRequest"]:c18(),["PromotionRefInputPromotionCode"]:c19(),["PromotionRefInputPromotionID"]:c20(),["PromotionRefRequest"]:c21(),["SharedCodec2"]:c22(),["SharedCodec3"]:c23(),["SharedCodec348"]:c24(),["SharedCodec349"]:c25(),["SharedCodec350"]:c26(),["SharedCodec351"]:c27(),["SharedCodec352"]:c28(),["SharedCodec353"]:c29(),["SharedCodec358"]:c30(),["SharedCodec359"]:c31(),["ThemeConfigRequest"]:c32()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
