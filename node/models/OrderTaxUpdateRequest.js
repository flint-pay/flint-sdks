import { d8553 as c0 } from '../descriptors/data/381.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c1 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10004 as c2, d10012 as c3, d10014 as c11 } from '../descriptors/data/465.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9468 as c4, d9469 as c5, d9470 as c6, d9471 as c7, d9472 as c8, d9473 as c9, d9474 as c10 } from '../descriptors/data/431.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9476 as c12, d9477 as c13, d9478 as c14, d9479 as c15, d9480 as c16, d9481 as c17, d9482 as c18, d9483 as c19, d9484 as c20, d9485 as c21, d9486 as c22, d9487 as c23, d9488 as c24, d9497 as c37, d9498 as c38 } from '../descriptors/data/432.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10022 as c25, d10023 as c26, d10024 as c27, d10025 as c28, d10026 as c29, d10027 as c30 } from '../descriptors/data/466.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9122 as c31 } from '../descriptors/data/414.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8388 as c32, d8389 as c33, d8390 as c34, d8391 as c35 } from '../descriptors/data/372.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10098 as c36 } from '../descriptors/data/469.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d10014 as d10014 } from '../descriptors/data/465.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10014;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["MoneyValue"]:c1(),["OrderChargeTaxAssignment"]:c2(),["OrderLineItemTaxAssignment"]:c3(),["OrderTaxCalculationRequest"]:c4(),["OrderTaxComponentRequest"]:c5(),["OrderTaxExemptionRequest"]:c6(),["OrderTaxJurisdictionRequest"]:c7(),["OrderTaxLocationFullAddressRequest"]:c8(),["OrderTaxLocationPostalAddressRequest"]:c9(),["OrderTaxLocationRequest"]:c10(),["OrderTaxUpdateRequest"]:c11(),["SharedCodec1996"]:c12(),["SharedCodec1997"]:c13(),["SharedCodec1998"]:c14(),["SharedCodec1999"]:c15(),["SharedCodec2000"]:c16(),["SharedCodec2001"]:c17(),["SharedCodec2005"]:c18(),["SharedCodec2006"]:c19(),["SharedCodec2007"]:c20(),["SharedCodec2008"]:c21(),["SharedCodec2009"]:c22(),["SharedCodec2012"]:c23(),["SharedCodec2013"]:c24(),["SharedCodec2025"]:c25(),["SharedCodec2026"]:c26(),["SharedCodec2027"]:c27(),["SharedCodec2028"]:c28(),["SharedCodec2029"]:c29(),["SharedCodec2030"]:c30(),["SharedCodec219"]:c31(),["SharedCodec719"]:c32(),["SharedCodec720"]:c33(),["SharedCodec721"]:c34(),["SharedCodec722"]:c35(),["TaxCalculationRequestModel"]:c36(),["TaxComponentRequestModel"]:c37(),["TaxJurisdictionRequestModel"]:c38()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxUpdateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
