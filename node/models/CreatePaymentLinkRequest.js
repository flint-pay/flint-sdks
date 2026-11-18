import { d8228 as c0, d8229 as c1, d8222 as c2, d8231 as c3, d8232 as c4, d8233 as c5, d8234 as c12, d8227 as c20 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d356 as c6 } from '../descriptors/data/20.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8024 as c7, d8025 as c8 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8031 as c9 } from '../descriptors/data/348.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8662 as c10, d8659 as c21, d8660 as c22, d8661 as c23 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c11 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10137 as c13, d10138 as c14, d10142 as c15, d10143 as c16 } from '../descriptors/data/467.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10147 as c17, d10148 as c18, d10156 as c19 } from '../descriptors/data/468.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10172 as c24, d10177 as c25, d10178 as c26 } from '../descriptors/data/470.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10180 as c27, d10181 as c28, d10182 as c29, d10183 as c30, d10184 as c31 } from '../descriptors/data/471.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10189 as c32, d10190 as c33, d10191 as c34, d10192 as c35 } from '../descriptors/data/472.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10206 as c36, d10207 as c37 } from '../descriptors/data/473.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d356 as d356 } from '../descriptors/data/20.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d356;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["PlatformFeeMoney"]:c20(),["SharedCodec1453"]:c21(),["SharedCodec1454"]:c22(),["SharedCodec1455"]:c23(),["SharedCodec2149"]:c24(),["SharedCodec2154"]:c25(),["SharedCodec2155"]:c26(),["SharedCodec2157"]:c27(),["SharedCodec2173"]:c28(),["SharedCodec2174"]:c29(),["SharedCodec2175"]:c30(),["SharedCodec2176"]:c31(),["SharedCodec2183"]:c32(),["SharedCodec2184"]:c33(),["SharedCodec2185"]:c34(),["SharedCodec2186"]:c35(),["SharedCodec527"]:c36(),["SharedCodec528"]:c37()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
