import { d8228 as c0, d8229 as c1, d8231 as c2, d8232 as c3, d8233 as c4, d8234 as c9, d8227 as c18 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8024 as c5, d8025 as c6, d8016 as c35, d8017 as c36, d8015 as c37 } from '../descriptors/data/347.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8662 as c7, d8659 as c20, d8660 as c21, d8661 as c22 } from '../descriptors/data/382.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c8 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10136 as c10, d10139 as c11, d10141 as c12, d10144 as c13 } from '../descriptors/data/467.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10146 as c14, d10149 as c15, d10152 as c16, d10157 as c17 } from '../descriptors/data/468.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9033 as c19 } from '../descriptors/data/405.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10172 as c23, d10177 as c24, d10178 as c25 } from '../descriptors/data/470.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10180 as c26, d10181 as c27, d10182 as c28, d10183 as c29, d10184 as c30, d10185 as c31, d10186 as c32, d10187 as c33, d10188 as c34 } from '../descriptors/data/471.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8358 as c38 } from '../descriptors/data/366.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9714 as c39, d9715 as c40 } from '../descriptors/data/444.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10195 as c41, d10196 as c42 } from '../descriptors/data/472.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7767 as c43 } from '../descriptors/data/327.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7767 as d7767 } from '../descriptors/data/327.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7767;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["PlatformFeeMoney"]:c18(),["SharedCodec137"]:c19(),["SharedCodec1453"]:c20(),["SharedCodec1454"]:c21(),["SharedCodec1455"]:c22(),["SharedCodec2149"]:c23(),["SharedCodec2154"]:c24(),["SharedCodec2155"]:c25(),["SharedCodec2157"]:c26(),["SharedCodec2173"]:c27(),["SharedCodec2174"]:c28(),["SharedCodec2175"]:c29(),["SharedCodec2176"]:c30(),["SharedCodec2177"]:c31(),["SharedCodec2178"]:c32(),["SharedCodec2179"]:c33(),["SharedCodec2180"]:c34(),["SharedCodec3069"]:c35(),["SharedCodec3070"]:c36(),["SharedCodec3071"]:c37(),["SharedCodec3075"]:c38(),["SharedCodec3121"]:c39(),["SharedCodec3122"]:c40(),["SharedCodec3150"]:c41(),["SharedCodec3151"]:c42(),["UpdatePaymentLinkRequest"]:c43()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
