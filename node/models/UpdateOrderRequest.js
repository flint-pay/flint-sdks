import { d5793 as c0, d5791 as c14, d5792 as c15, d5790 as c27 } from '../descriptors/data/254.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6782 as c1, d6779 as c37, d6780 as c38, d6781 as c39 } from '../descriptors/data/308.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5685 as c2, d5686 as c26 } from '../descriptors/data/248.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5556 as c3 } from '../descriptors/data/241.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7354 as c4 } from '../descriptors/data/343.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6916 as c5, d6918 as c7, d6919 as c8, d6920 as c9 } from '../descriptors/data/315.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7359 as c6, d7363 as c13, d7374 as c20, d7375 as c21, d7376 as c22, d7377 as c23, d7378 as c24, d7379 as c25 } from '../descriptors/data/344.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6921 as c10, d6922 as c11, d6923 as c12, d6925 as c16, d6926 as c17, d6927 as c18, d6928 as c19, d6933 as c33, d6934 as c34, d6935 as c35, d6936 as c36, d6937 as c41, d6938 as c42 } from '../descriptors/data/316.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7402 as c28 } from '../descriptors/data/345.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7403 as c29, d7404 as c30, d7405 as c31 } from '../descriptors/data/346.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d6581 as c32 } from '../descriptors/data/299.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d7448 as c40 } from '../descriptors/data/349.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5452 as c43 } from '../descriptors/data/234.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { d5452 as d5452 } from '../descriptors/data/234.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5452;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["InventoryRoutingSourceRequest"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["OrderChargeTaxAssignment"]:c4(),["OrderDeliveryDestinationRecipientRequest"]:c5(),["OrderLineItemTaxAssignment"]:c6(),["OrderTaxCalculationRequest"]:c7(),["OrderTaxComponentRequest"]:c8(),["OrderTaxJurisdictionRequest"]:c9(),["OrderTaxLocationFullAddressRequest"]:c10(),["OrderTaxLocationPostalAddressRequest"]:c11(),["OrderTaxLocationRequest"]:c12(),["OrderTaxUpdateRequest"]:c13(),["SharedCodec0"]:c14(),["SharedCodec1"]:c15(),["SharedCodec1029"]:c16(),["SharedCodec1030"]:c17(),["SharedCodec1031"]:c18(),["SharedCodec1032"]:c19(),["SharedCodec1037"]:c20(),["SharedCodec1038"]:c21(),["SharedCodec1039"]:c22(),["SharedCodec1040"]:c23(),["SharedCodec1041"]:c24(),["SharedCodec1042"]:c25(),["SharedCodec1563"]:c26(),["SharedCodec1566"]:c27(),["SharedCodec1618"]:c28(),["SharedCodec1619"]:c29(),["SharedCodec1620"]:c30(),["SharedCodec1621"]:c31(),["SharedCodec258"]:c32(),["SharedCodec316"]:c33(),["SharedCodec317"]:c34(),["SharedCodec318"]:c35(),["SharedCodec319"]:c36(),["SharedCodec772"]:c37(),["SharedCodec773"]:c38(),["SharedCodec774"]:c39(),["TaxCalculationRequestModel"]:c40(),["TaxComponentRequestModel"]:c41(),["TaxJurisdictionRequestModel"]:c42(),["UpdateOrderRequest"]:c43()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
