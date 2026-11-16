import { d6956 as c0, d6957 as c1, d6951 as c2, d6959 as c3, d6960 as c4, d6961 as c5, d6962 as c12 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d318 as c6 } from '../descriptors/data/18.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6754 as c7, d6755 as c8 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6761 as c9 } from '../descriptors/data/301.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7388 as c10, d7385 as c20, d7386 as c21, d7387 as c22 } from '../descriptors/data/335.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c11 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8810 as c13, d8811 as c14, d8815 as c15, d8816 as c16, d8820 as c17 } from '../descriptors/data/418.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8821 as c18, d8829 as c19 } from '../descriptors/data/419.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8845 as c23 } from '../descriptors/data/420.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8850 as c24, d8851 as c25, d8853 as c26, d8854 as c27, d8855 as c28, d8856 as c29, d8857 as c30 } from '../descriptors/data/421.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8862 as c31, d8863 as c32, d8864 as c33, d8865 as c34 } from '../descriptors/data/422.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8877 as c35, d8878 as c36 } from '../descriptors/data/423.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d318 as d318 } from '../descriptors/data/18.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d318;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["SharedCodec1114"]:c20(),["SharedCodec1115"]:c21(),["SharedCodec1116"]:c22(),["SharedCodec1630"]:c23(),["SharedCodec1635"]:c24(),["SharedCodec1636"]:c25(),["SharedCodec1638"]:c26(),["SharedCodec1639"]:c27(),["SharedCodec1640"]:c28(),["SharedCodec1641"]:c29(),["SharedCodec1642"]:c30(),["SharedCodec1647"]:c31(),["SharedCodec1648"]:c32(),["SharedCodec1649"]:c33(),["SharedCodec1650"]:c34(),["SharedCodec464"]:c35(),["SharedCodec465"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
