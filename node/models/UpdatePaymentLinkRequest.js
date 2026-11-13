import { d6086 as c0, d6087 as c1, d6088 as c2, d6089 as c3, d6090 as c4, d6091 as c9 } from '../descriptors/data/275.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5903 as c5, d5904 as c6, d5895 as c30, d5896 as c31, d5894 as c32 } from '../descriptors/data/264.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6515 as c7, d6512 as c38, d6513 as c39, d6514 as c40 } from '../descriptors/data/297.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c8 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7937 as c10, d7940 as c11, d7942 as c12, d7945 as c13, d7947 as c14 } from '../descriptors/data/380.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7950 as c15, d7953 as c16, d7958 as c17 } from '../descriptors/data/381.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7973 as c18 } from '../descriptors/data/382.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7978 as c19, d7979 as c20, d7981 as c21, d7982 as c22, d7983 as c23, d7984 as c24, d7985 as c25, d7986 as c26, d7987 as c27, d7988 as c28 } from '../descriptors/data/383.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7989 as c29, d7994 as c36, d7995 as c37 } from '../descriptors/data/384.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6222 as c33 } from '../descriptors/data/282.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7529 as c34, d7530 as c35 } from '../descriptors/data/357.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6646 as c41 } from '../descriptors/data/305.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5662 as c42 } from '../descriptors/data/248.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5662 as d5662 } from '../descriptors/data/248.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5662;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["SharedCodec1193"]:c18(),["SharedCodec1198"]:c19(),["SharedCodec1199"]:c20(),["SharedCodec1201"]:c21(),["SharedCodec1202"]:c22(),["SharedCodec1203"]:c23(),["SharedCodec1204"]:c24(),["SharedCodec1205"]:c25(),["SharedCodec1206"]:c26(),["SharedCodec1207"]:c27(),["SharedCodec1208"]:c28(),["SharedCodec1209"]:c29(),["SharedCodec1693"]:c30(),["SharedCodec1694"]:c31(),["SharedCodec1695"]:c32(),["SharedCodec1699"]:c33(),["SharedCodec1745"]:c34(),["SharedCodec1746"]:c35(),["SharedCodec1774"]:c36(),["SharedCodec1775"]:c37(),["SharedCodec831"]:c38(),["SharedCodec832"]:c39(),["SharedCodec833"]:c40(),["SharedCodec84"]:c41(),["UpdatePaymentLinkRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
