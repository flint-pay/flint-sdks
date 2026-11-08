import { d5960 as c0, d5961 as c1, d5962 as c3, d5963 as c4, d5964 as c11 } from '../descriptors/data/264.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5866 as c2 } from '../descriptors/data/258.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d300 as c5 } from '../descriptors/data/16.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5695 as c6, d5696 as c7, d5702 as c8 } from '../descriptors/data/249.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6782 as c9, d6779 as c33, d6780 as c34, d6781 as c35 } from '../descriptors/data/308.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c10 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7581 as c12, d7582 as c13 } from '../descriptors/data/356.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7586 as c14, d7587 as c15, d7591 as c16, d7592 as c17 } from '../descriptors/data/357.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7600 as c18 } from '../descriptors/data/358.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7613 as c19 } from '../descriptors/data/359.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7621 as c20, d7622 as c21, d7624 as c22, d7625 as c23, d7626 as c24, d7627 as c25, d7628 as c26 } from '../descriptors/data/360.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7633 as c27, d7634 as c28, d7635 as c29, d7636 as c30 } from '../descriptors/data/361.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7648 as c31, d7649 as c32 } from '../descriptors/data/362.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d300 as d300 } from '../descriptors/data/16.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d300;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["CreatePaymentLinkRequest"]:c5(),["ImageInputFile"]:c6(),["ImageInputSourceURL"]:c7(),["ImageRequest"]:c8(),["InventoryRoutingSourceRequest"]:c9(),["MoneyValue"]:c10(),["OrderLineItemTaxRequest"]:c11(),["PaymentLinkCustomFieldRequest"]:c12(),["PaymentLinkCustomTextConfig"]:c13(),["PaymentLinkEventConfigRequest"]:c14(),["PaymentLinkLegalConfig"]:c15(),["PaymentLinkLineItemRequest"]:c16(),["PaymentLinkPaymentConfig"]:c17(),["PaymentLinkThemeConfig"]:c18(),["SharedCodec1114"]:c19(),["SharedCodec1122"]:c20(),["SharedCodec1123"]:c21(),["SharedCodec1125"]:c22(),["SharedCodec1126"]:c23(),["SharedCodec1127"]:c24(),["SharedCodec1128"]:c25(),["SharedCodec1129"]:c26(),["SharedCodec1134"]:c27(),["SharedCodec1135"]:c28(),["SharedCodec1136"]:c29(),["SharedCodec1137"]:c30(),["SharedCodec329"]:c31(),["SharedCodec330"]:c32(),["SharedCodec772"]:c33(),["SharedCodec773"]:c34(),["SharedCodec774"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
