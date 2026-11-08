import { d5793 as c0, d5791 as c19, d5792 as c20 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5960 as c1, d5961 as c6, d5962 as c9, d5963 as c10, d5964 as c15 } from '../descriptors/data/264.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5716 as c2, d5717 as c3, d5718 as c4, d5719 as c5, d5720 as c7, d5723 as c11 } from '../descriptors/data/250.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5866 as c8 } from '../descriptors/data/258.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d200 as c12 } from '../descriptors/data/8.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c13 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c14 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5835 as c16, d5836 as c17, d5837 as c18 } from '../descriptors/data/257.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5874 as c21, d5875 as c22, d5876 as c23 } from '../descriptors/data/259.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5737 as c24, d5738 as c25, d5741 as c26 } from '../descriptors/data/251.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5747 as c27, d5756 as c28 } from '../descriptors/data/252.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5773 as c29 } from '../descriptors/data/253.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d200 as d200 } from '../descriptors/data/8.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d200;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutTaxConfigRequest"]:c9(),["CheckoutTipConfigRequest"]:c10(),["CreateCheckoutSessionDiscount"]:c11(),["CreateCheckoutSessionQuickPay"]:c12(),["MetadataRequest"]:c13(),["MoneyValue"]:c14(),["OrderLineItemTaxRequest"]:c15(),["PromotionRefInputPromotionCode"]:c16(),["PromotionRefInputPromotionID"]:c17(),["PromotionRefRequest"]:c18(),["SharedCodec0"]:c19(),["SharedCodec1"]:c20(),["SharedCodec171"]:c21(),["SharedCodec172"]:c22(),["SharedCodec173"]:c23(),["SharedCodec174"]:c24(),["SharedCodec175"]:c25(),["SharedCodec176"]:c26(),["SharedCodec179"]:c27(),["SharedCodec180"]:c28(),["ThemeConfigRequest"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionQuickPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
