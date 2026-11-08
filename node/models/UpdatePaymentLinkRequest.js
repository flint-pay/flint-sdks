import { d5960 as c0, d5961 as c1, d5962 as c2, d5963 as c3, d5964 as c8 } from '../descriptors/data/264.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5695 as c4, d5696 as c5 } from '../descriptors/data/249.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6782 as c6, d6779 as c38, d6780 as c39, d6781 as c40 } from '../descriptors/data/308.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c7 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7580 as c9, d7583 as c10 } from '../descriptors/data/356.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7585 as c11, d7588 as c12, d7590 as c13 } from '../descriptors/data/357.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7593 as c14, d7596 as c15, d7601 as c16 } from '../descriptors/data/358.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7613 as c17 } from '../descriptors/data/359.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7621 as c18, d7622 as c19, d7624 as c20, d7625 as c21, d7626 as c22, d7627 as c23, d7628 as c24, d7629 as c25, d7630 as c26, d7631 as c27 } from '../descriptors/data/360.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7632 as c28, d7637 as c35, d7638 as c36 } from '../descriptors/data/361.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5687 as c29, d5688 as c30, d5686 as c31 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6073 as c32 } from '../descriptors/data/270.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7226 as c33, d7227 as c34 } from '../descriptors/data/336.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5839 as c37 } from '../descriptors/data/257.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5457 as c41 } from '../descriptors/data/235.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5457 as d5457 } from '../descriptors/data/235.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5457;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxConfigRequest"]:c2(),["CheckoutTipConfigRequest"]:c3(),["ImageInputFile"]:c4(),["ImageInputSourceURL"]:c5(),["InventoryRoutingSourceRequest"]:c6(),["MoneyValue"]:c7(),["OrderLineItemTaxRequest"]:c8(),["PaymentLinkCustomFieldPatchRequest"]:c9(),["PaymentLinkCustomTextPatchRequest"]:c10(),["PaymentLinkEventConfigPatchRequest"]:c11(),["PaymentLinkLegalPatchRequest"]:c12(),["PaymentLinkLineItemPatchRequest"]:c13(),["PaymentLinkPaymentPatchRequest"]:c14(),["PaymentLinkRedirectsPatchRequest"]:c15(),["PaymentLinkThemePatchRequest"]:c16(),["SharedCodec1114"]:c17(),["SharedCodec1122"]:c18(),["SharedCodec1123"]:c19(),["SharedCodec1125"]:c20(),["SharedCodec1126"]:c21(),["SharedCodec1127"]:c22(),["SharedCodec1128"]:c23(),["SharedCodec1129"]:c24(),["SharedCodec1130"]:c25(),["SharedCodec1131"]:c26(),["SharedCodec1132"]:c27(),["SharedCodec1133"]:c28(),["SharedCodec1561"]:c29(),["SharedCodec1562"]:c30(),["SharedCodec1563"]:c31(),["SharedCodec1567"]:c32(),["SharedCodec1613"]:c33(),["SharedCodec1614"]:c34(),["SharedCodec1631"]:c35(),["SharedCodec1632"]:c36(),["SharedCodec73"]:c37(),["SharedCodec772"]:c38(),["SharedCodec773"]:c39(),["SharedCodec774"]:c40(),["UpdatePaymentLinkRequest"]:c41()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
