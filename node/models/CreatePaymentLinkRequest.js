import { d7979 as c0, d7980 as c1, d7974 as c2, d7982 as c3, d7983 as c4, d7984 as c5, d7985 as c12 } from '../descriptors/data/348.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d349 as c6 } from '../descriptors/data/20.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7777 as c7, d7778 as c8 } from '../descriptors/data/336.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7784 as c9 } from '../descriptors/data/337.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8411 as c10, d8408 as c20, d8409 as c21, d8410 as c22 } from '../descriptors/data/371.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c11 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9833 as c13, d9834 as c14, d9838 as c15, d9839 as c16 } from '../descriptors/data/454.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9843 as c17, d9844 as c18, d9852 as c19 } from '../descriptors/data/455.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9868 as c23 } from '../descriptors/data/456.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9873 as c24, d9874 as c25, d9876 as c26, d9877 as c27, d9878 as c28, d9879 as c29, d9880 as c30 } from '../descriptors/data/457.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9885 as c31, d9886 as c32 } from '../descriptors/data/458.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9887 as c33, d9888 as c34 } from '../descriptors/data/459.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9900 as c35, d9901 as c36 } from '../descriptors/data/460.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d349 as d349 } from '../descriptors/data/20.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d349;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerFieldsRequest"]:c0(),["CheckoutPromotionConfigRequest"]:c1(),["CheckoutRedirectsRequest"]:c2(),["CheckoutTaxCalculationRequest"]:c3(),["CheckoutTaxConfigRequest"]:c4(),["CheckoutTipConfigRequest"]:c5(),["CreatePaymentLinkRequest"]:c6(),["ImageInputFile"]:c7(),["ImageInputSourceURL"]:c8(),["ImageRequest"]:c9(),["InventoryRoutingSourceRequest"]:c10(),["MoneyValue"]:c11(),["OrderLineItemTaxRequest"]:c12(),["PaymentLinkCustomFieldRequest"]:c13(),["PaymentLinkCustomTextConfig"]:c14(),["PaymentLinkEventConfigRequest"]:c15(),["PaymentLinkLegalConfig"]:c16(),["PaymentLinkLineItemRequest"]:c17(),["PaymentLinkPaymentConfig"]:c18(),["PaymentLinkThemeConfig"]:c19(),["SharedCodec1442"]:c20(),["SharedCodec1443"]:c21(),["SharedCodec1444"]:c22(),["SharedCodec2083"]:c23(),["SharedCodec2088"]:c24(),["SharedCodec2089"]:c25(),["SharedCodec2091"]:c26(),["SharedCodec2107"]:c27(),["SharedCodec2108"]:c28(),["SharedCodec2109"]:c29(),["SharedCodec2110"]:c30(),["SharedCodec2117"]:c31(),["SharedCodec2118"]:c32(),["SharedCodec2119"]:c33(),["SharedCodec2120"]:c34(),["SharedCodec521"]:c35(),["SharedCodec522"]:c36()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
