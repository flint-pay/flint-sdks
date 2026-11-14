import { d6131 as c0, d6132 as c1, d6133 as c2, d6134 as c3, d6135 as c4, d6136 as c9 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5929 as c5, d5930 as c6, d5921 as c30, d5922 as c31, d5920 as c32 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6553 as c7, d6550 as c38, d6551 as c39, d6552 as c40 } from '../descriptors/data/303.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c8 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7981 as c10, d7984 as c11, d7986 as c12, d7989 as c13, d7991 as c14 } from '../descriptors/data/386.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7994 as c15, d7997 as c16, d8002 as c17 } from '../descriptors/data/387.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8017 as c18 } from '../descriptors/data/388.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8022 as c19, d8023 as c20, d8025 as c21, d8026 as c22, d8027 as c23, d8028 as c24, d8029 as c25, d8030 as c26 } from '../descriptors/data/389.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8031 as c27, d8032 as c28, d8033 as c29 } from '../descriptors/data/390.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6256 as c33 } from '../descriptors/data/287.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7568 as c34, d7569 as c35 } from '../descriptors/data/363.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8038 as c36, d8039 as c37 } from '../descriptors/data/391.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6684 as c41 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5675 as c42 } from '../descriptors/data/250.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5675 as d5675 } from '../descriptors/data/250.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5675;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["SharedCodec1194"]:c18(),["SharedCodec1199"]:c19(),["SharedCodec1200"]:c20(),["SharedCodec1202"]:c21(),["SharedCodec1203"]:c22(),["SharedCodec1204"]:c23(),["SharedCodec1205"]:c24(),["SharedCodec1206"]:c25(),["SharedCodec1207"]:c26(),["SharedCodec1208"]:c27(),["SharedCodec1209"]:c28(),["SharedCodec1210"]:c29(),["SharedCodec1690"]:c30(),["SharedCodec1691"]:c31(),["SharedCodec1692"]:c32(),["SharedCodec1696"]:c33(),["SharedCodec1742"]:c34(),["SharedCodec1743"]:c35(),["SharedCodec1771"]:c36(),["SharedCodec1772"]:c37(),["SharedCodec836"]:c38(),["SharedCodec837"]:c39(),["SharedCodec838"]:c40(),["SharedCodec84"]:c41(),["UpdatePaymentLinkRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
