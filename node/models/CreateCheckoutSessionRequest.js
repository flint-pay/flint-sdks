import { d4541 as c0, d4539 as c16, d4540 as c17 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4697 as c1, d4698 as c6, d4699 as c10, d4700 as c11 } from '../descriptors/data/204.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4464 as c2, d4465 as c3, d4466 as c4, d4467 as c5, d4468 as c7, d4470 as c9, d4479 as c23, d4480 as c24, d4481 as c25, d4482 as c26, d4483 as c27, d4484 as c28 } from '../descriptors/data/190.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4615 as c8 } from '../descriptors/data/198.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d179 as c12 } from '../descriptors/data/7.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c13 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c14 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4634 as c15, d4621 as c20, d4622 as c21, d4623 as c22 } from '../descriptors/data/199.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4677 as c18, d4678 as c19 } from '../descriptors/data/201.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4485 as c29, d4486 as c30, d4487 as c31, d4488 as c32, d4489 as c33, d4490 as c34 } from '../descriptors/data/191.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4522 as c35 } from '../descriptors/data/193.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d179 as d179 } from '../descriptors/data/7.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d179;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CheckoutBuyerFieldsRequest"]:c1(),["CheckoutCustomTextWriteConfig"]:c2(),["CheckoutLegalConfigRequest"]:c3(),["CheckoutPaymentConfigRequest"]:c4(),["CheckoutPrefillRequest"]:c5(),["CheckoutPromotionConfigRequest"]:c6(),["CheckoutQuickPayItemRequest"]:c7(),["CheckoutRedirectsRequest"]:c8(),["CheckoutSubscriptionTermsRequest"]:c9(),["CheckoutTaxConfigRequest"]:c10(),["CheckoutTipConfigRequest"]:c11(),["CreateCheckoutSessionRequest"]:c12(),["MetadataRequest"]:c13(),["MoneyValue"]:c14(),["OrderLineItemTax"]:c15(),["SharedCodec0"]:c16(),["SharedCodec1"]:c17(),["SharedCodec101"]:c18(),["SharedCodec102"]:c19(),["SharedCodec138"]:c20(),["SharedCodec139"]:c21(),["SharedCodec140"]:c22(),["SharedCodec141"]:c23(),["SharedCodec142"]:c24(),["SharedCodec143"]:c25(),["SharedCodec144"]:c26(),["SharedCodec145"]:c27(),["SharedCodec146"]:c28(),["SharedCodec147"]:c29(),["SharedCodec148"]:c30(),["SharedCodec149"]:c31(),["SharedCodec150"]:c32(),["SharedCodec151"]:c33(),["SharedCodec152"]:c34(),["ThemeConfigRequest"]:c35()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
