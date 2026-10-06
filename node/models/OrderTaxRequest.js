import { d77 as c0, d1863 as c1, d1864 as c2, d1866 as c3, d1868 as c4, d1869 as c5, d1870 as c6, d1871 as c7, d1872 as c8, d1873 as c9, d1874 as c10, d1877 as c11, d361 as c12, d1860 as c13, d1862 as c14, d1861 as c15, d1876 as c16, d1875 as c17 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1877 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1877;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTaxCalculationRequest"]:c1(),["OrderTaxComponentRequest"]:c2(),["OrderTaxJurisdictionRequest"]:c3(),["OrderTaxLocationFullAddressRequest"]:c4(),["OrderTaxLocationInputFullAddress"]:c5(),["OrderTaxLocationInputInferredFullAddress"]:c6(),["OrderTaxLocationInputInferredPostalCode"]:c7(),["OrderTaxLocationInputPostalCode"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxRequest"]:c11(),["SharedCodec128"]:c12(),["SharedCodec496"]:c13(),["SharedCodec497"]:c14(),["SharedCodec498"]:c15(),["SharedCodec499"]:c16(),["SharedCodec500"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
