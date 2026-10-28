import { d4209 as c0, d4206 as c3, d4210 as c4, d4211 as c5, d4212 as c6, d4213 as c8, d4214 as c9, d4215 as c10, d4216 as c11, d4217 as c12, d4218 as c13, d4219 as c14, d4220 as c15, d4207 as c24, d4208 as c25 } from '../descriptors/data/179.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4531 as c2, d4533 as c7 } from '../descriptors/data/199.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4221 as c16, d4222 as c17, d4224 as c22, d4225 as c23, d4226 as c26, d4227 as c27 } from '../descriptors/data/180.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4537 as c18 } from '../descriptors/data/200.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4558 as c19, d4559 as c20 } from '../descriptors/data/201.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3941 as c21 } from '../descriptors/data/167.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4585 as c28, d4586 as c29, d4587 as c30 } from '../descriptors/data/203.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3158 as c31, d3159 as c32, d3160 as c33 } from '../descriptors/data/125.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2462 as c34 } from '../descriptors/data/99.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2462 as d2462 } from '../descriptors/data/99.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2462;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderTip"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderDeliveryDestinationAddressRequest"]:c3(),["OrderDeliveryDestinationRecipientRequest"]:c4(),["OrderDeliveryDestinationRequest"]:c5(),["OrderInventoryRoutingSourceRequest"]:c6(),["OrderLineItemTaxAssignment"]:c7(),["OrderTaxCalculationRequest"]:c8(),["OrderTaxComponentRequest"]:c9(),["OrderTaxJurisdictionRequest"]:c10(),["OrderTaxLocationFullAddressRequest"]:c11(),["OrderTaxLocationInputFullAddress"]:c12(),["OrderTaxLocationInputInferredFullAddress"]:c13(),["OrderTaxLocationInputInferredPostalCode"]:c14(),["OrderTaxLocationInputPostalCode"]:c15(),["OrderTaxLocationPostalAddressRequest"]:c16(),["OrderTaxLocationRequest"]:c17(),["OrderTaxUpdateRequest"]:c18(),["SharedCodec1208"]:c19(),["SharedCodec1209"]:c20(),["SharedCodec139"]:c21(),["SharedCodec180"]:c22(),["SharedCodec181"]:c23(),["SharedCodec973"]:c24(),["SharedCodec974"]:c25(),["SharedCodec982"]:c26(),["SharedCodec983"]:c27(),["SharedCodec986"]:c28(),["SharedCodec987"]:c29(),["SharedCodec988"]:c30(),["TaxCalculationRequest"]:c31(),["TaxComponentRequest"]:c32(),["TaxJurisdiction"]:c33(),["UpdateOrderRequest"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
