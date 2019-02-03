'use strict';

module.exports = function(args)
{
	console.log("Creating Relations");

	var models = args.models;

	/**

	Example : {
		source : "User",
		destination : "Car",
		type : "hasMany",
		key : "owner", (optional, prefered not defined)
	}

	that means = a Car belongs to a User. and 1 User can have many cars. you can access the cars with User.getCars()

	types : 
	belongsTo = a Son belongsTo a Father. eg : Son.getFather()
	hasOne = same with belongsTo, with one exception : the foreign key will be defined in the target model.
	hasMany = some Cars belongs to a User. eg : User.getCars()

	further docs can be viewed here : http://docs.sequelizejs.com/en/v3/api/associations/

	**/

	var relations = [
	// {
	// 	source : "PfaModel",
	// 	destination : "UserModel",
	// 	typeSource : "hasMany",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "pfa_id"
	// },
	// {
	// 	source : "BankModel",
	// 	destination : "UserModel",
	// 	typeSource : "hasMany",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "bank_id"
	// },
	// {
	// 	source : "UserModel",
	// 	destination : "OrderModel",
	// 	typeSource : "hasMany",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "customer_id"
	// },
	// {
	// 	source : "PfaModel",
	// 	destination : "OrderModel",
	// 	typeSource : "hasMany",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "pfa_id"
	// },
	// {
	// 	source : "UserModel",
	// 	destination : "OrderProcessModel",
	// 	typeSource : "hasMany",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "user_id"
	// },
	// {
	// 	source : "OrderModel",
	// 	destination : "OrderItemModel",
	// 	typeSource : "hasMany",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "order_id"
	// },
	// {
	// 	source : "ServiceModel",
	// 	destination : "PromoModel",
	// 	typeSource : "hasOne",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "promo_id"
	// },
	// {
	// 	source : "PromoModel",
	// 	destination : "SpecialPriceModel",
	// 	typeSource : "hasOne",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "promo_id"
	// },
	// {
	// 	source : "PromoModel",
	// 	destination : "DiscountModel",
	// 	typeSource : "hasOne",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "promo_id"
	// },
	// {
	// 	source : "PromoModel",
	// 	destination : "BannerModel",
	// 	typeSource : "hasOne",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "promo_id"
	// },
	// {
	// 	source : "ServiceModel",
	// 	destination : "VendorModel",
	// 	typeSource : "hasOne",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "service_id"
	// },
	// {
	// 	source : "ServiceModel",
	// 	destination : "ScreenModel",
	// 	typeSource : "hasMany",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "service_id"
	// },
	// {
	// 	source : "UserModel",
	// 	destination : "province_id",
	// 	typeSource : "hasMany",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "province_id"
	// },
	// {
	// 	source : "UserModel",
	// 	destination : "CityModel",
	// 	typeSource : "hasMany",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "city_id"
	// },
	// {
	// 	source : "UserModel",
	// 	destination : "DistrictModel",
	// 	typeSource : "hasMany",
	// 	typeDestination : "belongsTo",
	// 	foreignKey : "district_id"
	// },
	];
    
	return relations;
}