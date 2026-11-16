import { d6844 as c0, d6842 as c20, d6843 as c21 } from '../descriptors/data/306.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6956 as c1, d6957 as c6, d6951 as c7, d6958 as c8, d6959 as c9, d6960 as c10, d6961 as c11, d6955 as c16, d6945 as c17, d6946 as c18, d6947 as c19, d6953 as c22, d6954 as c23, d6963 as c24, d6948 as c26, d6949 as c27, d6950 as c28 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6773 as c2, d6774 as c3, d6775 as c4, d6776 as c5, d6780 as c12 } from '../descriptors/data/301.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d215 as c13 } from '../descriptors/data/10.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6744 as c14 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c15 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6964 as c25, d6965 as c34 } from '../descriptors/data/313.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6797 as c29, d6798 as c30, d6799 as c31 } from '../descriptors/data/303.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6810 as c32, d6814 as c33 } from '../descriptors/data/304.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6823 as c35 } from '../descriptors/data/305.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d215 as d215 } from '../descriptors/data/10.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d215;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeRequest"]:c16(),["PromotionRefInputPromotionCode"]:c17(),["PromotionRefInputPromotionID"]:c18(),["PromotionRefRequest"]:c19(),["SharedCodec0"]:c20(),["SharedCodec1"]:c21(),["SharedCodec188"]:c22(),["SharedCodec189"]:c23(),["SharedCodec259"]:c24(),["SharedCodec260"]:c25(),["SharedCodec284"]:c26(),["SharedCodec285"]:c27(),["SharedCodec286"]:c28(),["SharedCodec287"]:c29(),["SharedCodec288"]:c30(),["SharedCodec289"]:c31(),["SharedCodec299"]:c32(),["SharedCodec300"]:c33(),["SubscriptionPlanChangeLineItemRequest"]:c34(),["ThemeConfigRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
