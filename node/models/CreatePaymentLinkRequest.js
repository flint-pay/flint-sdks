import { d8229 as c0, d8230 as c1, d8223 as c2, d8228 as c20 } from '../descriptors/data/359.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8232 as c3, d8233 as c4, d8234 as c5, d8235 as c12 } from '../descriptors/data/360.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d356 as c6 } from '../descriptors/data/20.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8024 as c7, d8025 as c8 } from '../descriptors/data/347.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8031 as c9 } from '../descriptors/data/348.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d8663 as c10, d8660 as c21, d8661 as c22, d8662 as c23 } from '../descriptors/data/382.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d7886 as c11 } from '../descriptors/data/338.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10138 as c13, d10139 as c14, d10143 as c15, d10144 as c16 } from '../descriptors/data/468.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10148 as c17, d10149 as c18, d10157 as c19 } from '../descriptors/data/469.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10174 as c24, d10179 as c25, d10180 as c26 } from '../descriptors/data/471.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10182 as c27, d10183 as c28, d10184 as c29, d10185 as c30, d10186 as c31 } from '../descriptors/data/472.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10191 as c32, d10192 as c33, d10193 as c34, d10194 as c35 } from '../descriptors/data/473.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10209 as c36, d10210 as c37 } from '../descriptors/data/474.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d356 as d356 } from '../descriptors/data/20.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["PlatformFeeMoney"]:c20(),["SharedCodec1454"]:c21(),["SharedCodec1455"]:c22(),["SharedCodec1456"]:c23(),["SharedCodec2148"]:c24(),["SharedCodec2153"]:c25(),["SharedCodec2154"]:c26(),["SharedCodec2156"]:c27(),["SharedCodec2172"]:c28(),["SharedCodec2173"]:c29(),["SharedCodec2174"]:c30(),["SharedCodec2175"]:c31(),["SharedCodec2182"]:c32(),["SharedCodec2183"]:c33(),["SharedCodec2184"]:c34(),["SharedCodec2185"]:c35(),["SharedCodec529"]:c36(),["SharedCodec530"]:c37()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
