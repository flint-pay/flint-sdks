import { d6844 as c0, d6842 as c21, d6843 as c22 } from '../descriptors/data/306.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6956 as c1, d6957 as c6, d6951 as c8, d6959 as c9, d6960 as c10, d6961 as c11, d6962 as c16, d6955 as c17, d6945 as c18, d6946 as c19, d6947 as c20, d6948 as c23, d6949 as c24, d6950 as c25 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6773 as c2, d6774 as c3, d6775 as c4, d6776 as c5, d6777 as c7, d6780 as c12 } from '../descriptors/data/301.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d211 as c13 } from '../descriptors/data/9.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c14 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c15 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6797 as c26, d6798 as c27, d6799 as c28, d6805 as c29, d6806 as c30 } from '../descriptors/data/303.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6823 as c31 } from '../descriptors/data/305.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d211 as d211 } from '../descriptors/data/9.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d211;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionQuickPay"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["OrderLineItemTaxRequest"]:c16(),["PlatformFeeRequest"]:c17(),["PromotionRefInputPromotionCode"]:c18(),["PromotionRefInputPromotionID"]:c19(),["PromotionRefRequest"]:c20(),["SharedCodec0"]:c21(),["SharedCodec1"]:c22(),["SharedCodec284"]:c23(),["SharedCodec285"]:c24(),["SharedCodec286"]:c25(),["SharedCodec287"]:c26(),["SharedCodec288"]:c27(),["SharedCodec289"]:c28(),["SharedCodec294"]:c29(),["SharedCodec295"]:c30(),["ThemeConfigRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
