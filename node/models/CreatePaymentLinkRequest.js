import { d6086 as c0, d6087 as c1, d6088 as c3, d6089 as c4, d6090 as c5, d6091 as c12 } from '../descriptors/data/275.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6082 as c2 } from '../descriptors/data/274.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d316 as c6 } from '../descriptors/data/19.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5903 as c7, d5904 as c8 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5910 as c9 } from '../descriptors/data/265.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6515 as c10, d6512 as c34, d6513 as c35, d6514 as c36 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c11 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7938 as c13, d7939 as c14, d7943 as c15, d7944 as c16, d7948 as c17 } from '../descriptors/data/380.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7949 as c18, d7957 as c19 } from '../descriptors/data/381.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7973 as c20 } from '../descriptors/data/382.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7978 as c21, d7979 as c22, d7981 as c23, d7982 as c24, d7983 as c25, d7984 as c26, d7985 as c27 } from '../descriptors/data/383.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7990 as c28, d7991 as c29, d7992 as c30, d7993 as c31 } from '../descriptors/data/384.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8005 as c32, d8006 as c33 } from '../descriptors/data/385.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d316 as d316 } from '../descriptors/data/19.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d316;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["SharedCodec1193"]:c20(),["SharedCodec1198"]:c21(),["SharedCodec1199"]:c22(),["SharedCodec1201"]:c23(),["SharedCodec1202"]:c24(),["SharedCodec1203"]:c25(),["SharedCodec1204"]:c26(),["SharedCodec1205"]:c27(),["SharedCodec1210"]:c28(),["SharedCodec1211"]:c29(),["SharedCodec1212"]:c30(),["SharedCodec1213"]:c31(),["SharedCodec374"]:c32(),["SharedCodec375"]:c33(),["SharedCodec831"]:c34(),["SharedCodec832"]:c35(),["SharedCodec833"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
