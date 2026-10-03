import { d74 as c0, d1852 as c1, d1853 as c2, d1855 as c3, d1857 as c4, d1858 as c5, d1859 as c6, d1860 as c7, d1861 as c8, d1862 as c9, d1863 as c10, d1866 as c11, d421 as c12, d1849 as c13, d1851 as c14, d1850 as c15, d1865 as c16, d1864 as c17 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1866 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1866;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderTaxCalculationRequest"]:c1(),["OrderTaxComponentRequest"]:c2(),["OrderTaxJurisdictionRequest"]:c3(),["OrderTaxLocationFullAddressRequest"]:c4(),["OrderTaxLocationInputFullAddress"]:c5(),["OrderTaxLocationInputInferredFullAddress"]:c6(),["OrderTaxLocationInputInferredPostalCode"]:c7(),["OrderTaxLocationInputPostalCode"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxRequest"]:c11(),["SharedCodec157"]:c12(),["SharedCodec487"]:c13(),["SharedCodec488"]:c14(),["SharedCodec489"]:c15(),["SharedCodec490"]:c16(),["SharedCodec491"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
