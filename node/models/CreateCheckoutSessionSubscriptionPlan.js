import { d7867 as c0, d7865 as c20, d7866 as c23 } from '../descriptors/data/342.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7979 as c1, d7980 as c6, d7974 as c7, d7981 as c8, d7982 as c9, d7983 as c10, d7984 as c11, d7978 as c16, d7968 as c17, d7969 as c18, d7970 as c19, d7976 as c21, d7977 as c22, d7986 as c24, d7971 as c26, d7972 as c27, d7973 as c28 } from '../descriptors/data/348.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7796 as c2, d7797 as c3, d7798 as c4, d7799 as c5 } from '../descriptors/data/337.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7803 as c12 } from '../descriptors/data/338.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d246 as c13 } from '../descriptors/data/11.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c14 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c15 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7987 as c25, d7988 as c34 } from '../descriptors/data/349.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7820 as c29, d7821 as c30, d7822 as c31 } from '../descriptors/data/339.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7833 as c32, d7835 as c33 } from '../descriptors/data/340.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7846 as c35 } from '../descriptors/data/341.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d246 as d246 } from '../descriptors/data/11.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d246;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutRedirectsRequest"]:c7(),["CheckoutSubscriptionTermsRequest"]:c8(),["CheckoutTaxCalculationRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionDiscount"]:c12(),["CreateCheckoutSessionSubscriptionPlan"]:c13(),["MetadataRequest"]:c14(),["MoneyValue"]:c15(),["PlatformFeeRequest"]:c16(),["PromotionRefInputPromotionCode"]:c17(),["PromotionRefInputPromotionID"]:c18(),["PromotionRefRequest"]:c19(),["SharedCodec2"]:c20(),["SharedCodec227"]:c21(),["SharedCodec228"]:c22(),["SharedCodec3"]:c23(),["SharedCodec307"]:c24(),["SharedCodec308"]:c25(),["SharedCodec341"]:c26(),["SharedCodec342"]:c27(),["SharedCodec343"]:c28(),["SharedCodec344"]:c29(),["SharedCodec345"]:c30(),["SharedCodec346"]:c31(),["SharedCodec356"]:c32(),["SharedCodec357"]:c33(),["SubscriptionPlanChangeLineItemRequest"]:c34(),["ThemeConfigRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionSubscriptionPlan(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
