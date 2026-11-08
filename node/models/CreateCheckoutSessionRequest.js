import { d5793 as c0, d5791 as c20, d5792 as c21 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5960 as c1, d5961 as c6, d5962 as c10, d5963 as c11, d5964 as c16 } from '../descriptors/data/264.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5716 as c2, d5717 as c3, d5718 as c4, d5719 as c5, d5720 as c7, d5722 as c9, d5723 as c12 } from '../descriptors/data/250.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5866 as c8 } from '../descriptors/data/258.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d201 as c13 } from '../descriptors/data/8.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c14 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c15 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5835 as c17, d5836 as c18, d5837 as c19 } from '../descriptors/data/257.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5940 as c22, d5941 as c23 } from '../descriptors/data/262.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5874 as c24, d5875 as c25, d5876 as c26 } from '../descriptors/data/259.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5737 as c27, d5738 as c28, d5741 as c29, d5742 as c30, d5745 as c31 } from '../descriptors/data/251.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5747 as c32, d5756 as c33, d5757 as c34, d5758 as c35, d5759 as c36 } from '../descriptors/data/252.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5760 as c37, d5761 as c38, d5773 as c39 } from '../descriptors/data/253.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d201 as d201 } from '../descriptors/data/8.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d201;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutSubscriptionTermsRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionRequest"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["OrderLineItemTaxRequest"]:c16(),["PromotionRefInputPromotionCode"]:c17(),["PromotionRefInputPromotionID"]:c18(),["PromotionRefRequest"]:c19(),["SharedCodec0"]:c20(),["SharedCodec1"]:c21(),["SharedCodec126"]:c22(),["SharedCodec127"]:c23(),["SharedCodec171"]:c24(),["SharedCodec172"]:c25(),["SharedCodec173"]:c26(),["SharedCodec174"]:c27(),["SharedCodec175"]:c28(),["SharedCodec176"]:c29(),["SharedCodec177"]:c30(),["SharedCodec178"]:c31(),["SharedCodec179"]:c32(),["SharedCodec180"]:c33(),["SharedCodec181"]:c34(),["SharedCodec182"]:c35(),["SharedCodec183"]:c36(),["SharedCodec184"]:c37(),["SharedCodec185"]:c38(),["ThemeConfigRequest"]:c39()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
