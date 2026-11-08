import { d199 as c0 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5596 as c1 } from '../descriptors/data/251.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4545 as c2, d4546 as c3, d4547 as c41, d4548 as c44, d4549 as c45 } from '../descriptors/data/194.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4573 as c4, d4574 as c42, d4575 as c43, d4578 as c46 } from '../descriptors/data/196.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5041 as c5, d5051 as c21 } from '../descriptors/data/222.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d445 as c6 } from '../descriptors/data/24.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4299 as c7 } from '../descriptors/data/180.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5064 as c8, d5065 as c9, d5066 as c10, d5067 as c11, d5068 as c12, d5069 as c16, d5070 as c17, d5071 as c18, d5072 as c19, d5082 as c26, d5083 as c28, d5084 as c29, d5073 as c30, d5074 as c31, d5075 as c32, d5076 as c33, d5077 as c34, d5078 as c35, d5079 as c36, d5080 as c37, d5081 as c47 } from '../descriptors/data/224.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4429 as c13 } from '../descriptors/data/188.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4312 as c14 } from '../descriptors/data/181.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5058 as c15, d5059 as c22, d5060 as c23, d5061 as c24, d5062 as c25, d5063 as c27 } from '../descriptors/data/223.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d1497 as c20 } from '../descriptors/data/69.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d5638 as c38, d5639 as c39, d5640 as c40 } from '../descriptors/data/254.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d4361 as c48, d4362 as c49 } from '../descriptors/data/184.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d199 as d199 } from '../descriptors/data/9.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d199;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryPreviewRequest"]:c0(),["CreateOrderLineItemRequest"]:c1(),["DeliveryAddressRequest"]:c2(),["DeliveryBuyerLocationRequest"]:c3(),["DeliveryCoordinateRequest"]:c4(),["DeliveryPickupAvailabilityMaximumDistanceRequest"]:c5(),["DeliveryPreviewRoutingSource"]:c6(),["Dimensions"]:c7(),["GiftCardPurchaseDetailsRequest"]:c8(),["GiftCardPurchaseRecipientRequest"]:c9(),["ImageReferenceRequest"]:c10(),["LineItemFulfillmentOriginRequest"]:c11(),["LineItemFulfillmentRequest"]:c12(),["MetadataRequest"]:c13(),["MoneyValue"]:c14(),["OrderDraftLineItemInventoryDemandRequest"]:c15(),["OrderDraftLineItemTaxCalculationRequest"]:c16(),["OrderDraftLineItemTaxRequest"]:c17(),["OrderDraftTaxComponentRequest"]:c18(),["OrderDraftTaxJurisdictionRequest"]:c19(),["SharedCodec190"]:c20(),["SharedCodec191"]:c21(),["SharedCodec252"]:c22(),["SharedCodec253"]:c23(),["SharedCodec254"]:c24(),["SharedCodec255"]:c25(),["SharedCodec256"]:c26(),["SharedCodec257"]:c27(),["SharedCodec258"]:c28(),["SharedCodec259"]:c29(),["SharedCodec261"]:c30(),["SharedCodec262"]:c31(),["SharedCodec263"]:c32(),["SharedCodec264"]:c33(),["SharedCodec266"]:c34(),["SharedCodec267"]:c35(),["SharedCodec269"]:c36(),["SharedCodec270"]:c37(),["SharedCodec271"]:c38(),["SharedCodec272"]:c39(),["SharedCodec273"]:c40(),["SharedCodec375"]:c41(),["SharedCodec376"]:c42(),["SharedCodec377"]:c43(),["SharedCodec378"]:c44(),["SharedCodec379"]:c45(),["SharedCodec604"]:c46(),["SubscribedLineRequest"]:c47(),["TextModifierRequest"]:c48(),["Weight"]:c49()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
