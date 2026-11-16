import { d6956 as c0, d6957 as c1, d6959 as c2, d6960 as c3, d6961 as c4, d6962 as c9 } from '../descriptors/data/312.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6754 as c5, d6755 as c6, d6746 as c33, d6747 as c34, d6745 as c35 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7388 as c7, d7385 as c18, d7386 as c19, d7387 as c20 } from '../descriptors/data/335.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6617 as c8 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8809 as c10 } from '../descriptors/data/417.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8812 as c11, d8814 as c12, d8817 as c13, d8819 as c14 } from '../descriptors/data/418.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8822 as c15, d8825 as c16, d8830 as c17 } from '../descriptors/data/419.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8845 as c21 } from '../descriptors/data/420.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8850 as c22, d8851 as c23, d8853 as c24, d8854 as c25, d8855 as c26, d8856 as c27, d8857 as c28, d8858 as c29, d8859 as c30 } from '../descriptors/data/421.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8860 as c31, d8861 as c32 } from '../descriptors/data/422.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7085 as c36 } from '../descriptors/data/319.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8397 as c37, d8398 as c38 } from '../descriptors/data/395.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8866 as c39, d8867 as c40 } from '../descriptors/data/423.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7770 as c41 } from '../descriptors/data/359.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6502 as c42 } from '../descriptors/data/282.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6502 as d6502 } from '../descriptors/data/282.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6502;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["SharedCodec1114"]:c18(),["SharedCodec1115"]:c19(),["SharedCodec1116"]:c20(),["SharedCodec1630"]:c21(),["SharedCodec1635"]:c22(),["SharedCodec1636"]:c23(),["SharedCodec1638"]:c24(),["SharedCodec1639"]:c25(),["SharedCodec1640"]:c26(),["SharedCodec1641"]:c27(),["SharedCodec1642"]:c28(),["SharedCodec1643"]:c29(),["SharedCodec1644"]:c30(),["SharedCodec1645"]:c31(),["SharedCodec1646"]:c32(),["SharedCodec2404"]:c33(),["SharedCodec2405"]:c34(),["SharedCodec2406"]:c35(),["SharedCodec2410"]:c36(),["SharedCodec2456"]:c37(),["SharedCodec2457"]:c38(),["SharedCodec2485"]:c39(),["SharedCodec2486"]:c40(),["SharedCodec63"]:c41(),["UpdatePaymentLinkRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
