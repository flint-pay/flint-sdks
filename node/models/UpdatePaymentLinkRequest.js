import { d7979 as c0, d7980 as c1, d7982 as c2, d7983 as c3, d7984 as c4, d7985 as c9 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7777 as c5, d7778 as c6, d7769 as c34, d7770 as c35, d7768 as c36 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8411 as c7, d8408 as c19, d8409 as c20, d8410 as c21 } from '../descriptors/data/371.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c8 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9832 as c10, d9835 as c11, d9837 as c12, d9840 as c13, d9842 as c14 } from '../descriptors/data/454.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9845 as c15, d9848 as c16, d9853 as c17 } from '../descriptors/data/455.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8793 as c18 } from '../descriptors/data/395.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9868 as c22 } from '../descriptors/data/456.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9873 as c23, d9874 as c24, d9876 as c25, d9877 as c26, d9878 as c27, d9879 as c28, d9880 as c29, d9881 as c30 } from '../descriptors/data/457.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9882 as c31, d9883 as c32, d9884 as c33 } from '../descriptors/data/458.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8108 as c37 } from '../descriptors/data/355.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9420 as c38, d9421 as c39 } from '../descriptors/data/431.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9889 as c40, d9890 as c41 } from '../descriptors/data/459.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7524 as c42 } from '../descriptors/data/317.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7524 as d7524 } from '../descriptors/data/317.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7524;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutTaxCalculationRequest"]:c2(),["CheckoutTaxConfigRequest"]:c3(),["CheckoutTipConfigRequest"]:c4(),["ImageInputFile"]:c5(),["ImageInputSourceURL"]:c6(),["InventoryRoutingSourceRequest"]:c7(),["MoneyValue"]:c8(),["OrderLineItemTaxRequest"]:c9(),["PaymentLinkCustomFieldPatchRequest"]:c10(),["PaymentLinkCustomTextPatchRequest"]:c11(),["PaymentLinkEventConfigPatchRequest"]:c12(),["PaymentLinkLegalPatchRequest"]:c13(),["PaymentLinkLineItemPatchRequest"]:c14(),["PaymentLinkPaymentPatchRequest"]:c15(),["PaymentLinkRedirectsPatchRequest"]:c16(),["PaymentLinkThemePatchRequest"]:c17(),["SharedCodec134"]:c18(),["SharedCodec1442"]:c19(),["SharedCodec1443"]:c20(),["SharedCodec1444"]:c21(),["SharedCodec2083"]:c22(),["SharedCodec2088"]:c23(),["SharedCodec2089"]:c24(),["SharedCodec2091"]:c25(),["SharedCodec2107"]:c26(),["SharedCodec2108"]:c27(),["SharedCodec2109"]:c28(),["SharedCodec2110"]:c29(),["SharedCodec2111"]:c30(),["SharedCodec2112"]:c31(),["SharedCodec2113"]:c32(),["SharedCodec2114"]:c33(),["SharedCodec2975"]:c34(),["SharedCodec2976"]:c35(),["SharedCodec2977"]:c36(),["SharedCodec2981"]:c37(),["SharedCodec3027"]:c38(),["SharedCodec3028"]:c39(),["SharedCodec3056"]:c40(),["SharedCodec3057"]:c41(),["UpdatePaymentLinkRequest"]:c42()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
