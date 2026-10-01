// 200 Authentic Trichy / Tiruchirappalli Localities
// Exactly 50 North, 50 East, 50 West, 50 South. No duplicates.

const northTrichy = [
  'Srirangam', 'Thiruvanaikoil', 'No. 1 Tollgate', 'Samayapuram', 'Mannachanallur',
  'Pichandar Kovil', 'Bikshandarkoil', 'Kondayampettai', 'Thimmarayasamudram', 'Mambazhasalai',
  'Melur Srirangam', 'Raghavendra Nagar Srirangam', 'Gandhi Road Srirangam', 'Singaperumal Koil Srirangam', 'Amma Mandapam Road',
  'Geethapuram', 'Mangamma Nagar', 'Nelson Road Thiruvanaikoil', 'Kumbakonam Road Thiruvanaikoil', 'Sanjeevi Nagar',
  'Devathanam', 'Sarkarpalayam', 'Panayapuram', 'Uttamar Kovil', 'Valadi',
  'Lalgudi', 'Siruganur', 'Irungalur', 'Kariyamanickam', 'Poonampalayam',
  'Manachanallur Road', 'Vengangudi', 'Edumalai', 'Samayapuram Tollgate', 'Kollidam Bank Road',
  'Srirangam East Gate', 'Srirangam West Gate', 'Melur Road', 'Thiruvanaikoil Trunk Road', 'Pagalavan Nagar',
  'Thiruvalarsolai', 'Kallanai Road', 'Gunaseelam Road', 'Palur', 'Sirugamani',
  'Pettavaithalai', 'Jeeyapuram', 'Allur', 'Andanallur', 'Thiruchendurai'
];

const eastTrichy = [
  'Thiruverumbur', 'Kattur', 'Ariyamangalam', 'BHEL Township', 'Kailasapuram',
  'Thuvakudi', 'Thuvakudimalai', 'NIT Trichy Campus', 'Pappakurichi', 'Koothappar',
  'Ellakudi', 'Oil Mill Ariyamangalam', 'Sitco Industrial Estate', 'Palakarai', 'Varaganeri',
  'Madurai Veeran Koil Street', 'Kamaraj Nagar Ariyamangalam', 'Rayas Nagar Kattur', 'Sakthi Nagar Kattur', 'Ganesh Nagar Kattur',
  'BHEL Kailasapuram', 'BHEL Sector 1', 'BHEL Sector 2', 'BHEL Sector 3', 'BHEL Training Complex',
  'Navalpattu', 'Happ Township', 'OFT Township', 'Anna Nagar Palakarai', 'Sangiliyandapuram',
  'Malaiyeedu', 'Ponmalaipatti', 'Golden Rock Central', 'Armor Gate Ponmalai', 'Melakalkandarkottai',
  'Keelakalkandarkottai', 'Alathur Thiruverumbur', 'Valavanthankottai', 'Asur', 'Kumbakudi',
  'Gundur', 'Mathur', 'Tanjore Road Ariyamangalam', 'Old Palakarai', 'East Boulevard Road',
  'Big Bazaar Street', 'Gandhi Market', 'Vellamandi', 'Tharanallur', 'Viragupettai'
];

const westTrichy = [
  'Thillai Nagar', 'Thillai Nagar East', 'Thillai Nagar West', 'Thillai Nagar Main Road', 'Woraiyur',
  'Nachiyar Koil Woraiyur', 'Salai Road', 'Tennur', 'Tennur High Road', 'Anna Nagar Tennur',
  'Ramalinga Nagar', 'Ramalinga Nagar South', 'Geetha Nagar Vayalur Road', 'Srinivasa Nagar Vayalur Road', 'Kumaran Nagar Vayalur Road',
  'Vayalur Road', 'Somarasampettai', 'Rettai Vaikkal', 'Uyyakondan Thirumalai', 'Shanmuga Nagar',
  'Bishop Heber College Area', 'Puthur', 'Puthur High Road', 'Puthur Agraharam', 'Marakkadai',
  'Rockfort Teppakulam', 'Chinnakadai Street', 'NSB Road', 'Main Guard Gate', 'Singarathope',
  'West Boulevard Road', 'Fort Station Road', 'Karur Bypass Road', 'Annamalai Nagar', 'Sashtri Road',
  'Cantonment West', 'KMC Hospital Road', 'Linga Nagar', 'Malliampathu', 'Kuzhumani',
  'Adavathur', 'Mutharasanallur', 'Allithurai', 'Sholanganallur', 'Inamkulathur',
  'Ramji Nagar', 'Pirattiyur', 'Pirattiyur West', 'Crawford West', 'Edamalaipatti Pudur West'
];

const southTrichy = [
  'Cantonment', 'Central Bus Stand Area', 'Trichy Railway Junction Area', 'Melapudur', 'Keelapudur',
  'Beema Nagar', 'Sangillyandapuram South', 'KK Nagar', 'KK Nagar Sector 1', 'KK Nagar Sector 2',
  'KK Nagar Sector 3', 'LIC Colony KK Nagar', 'Sundar Nagar KK Nagar', 'Olaiyur', 'Udayanpatti',
  'K. Sathanur', 'Airport Area Trichy', 'Wireless Road Airport', 'Anna Nagar Airport', 'Gandhi Nagar Airport',
  'JK Nagar Khajamalai', 'Khajamalai', 'Khajamalai Main Road', 'Bharathidasan University City Campus', 'Race Course Road',
  'Lawsons Road Cantonment', 'Mc Donalds Road Cantonment', 'Collector Office Road', 'Court Complex Area', 'Subramaniapuram',
  'Crawford', 'Crawford Colony', 'Edamalaipatti Pudur', 'Anbilar Nagar E.Pudur', 'RMS Colony E.Pudur',
  'Panjapur', 'New Integrated Bus Stand Area', 'Dindigul Road Trichy', 'Karumandapam', 'Karumandapam Main Road',
  'Jaya Nagar Karumandapam', 'RMS Colony Karumandapam', 'Manikandam', 'Nagamangalam', 'Fathima Nagar',
  'Madurai Road Trichy', 'Koliyanur', 'Alundur', 'Kunnathur Trichy', 'Manikandam Union Office Area'
];

module.exports = {
  northTrichy,
  eastTrichy,
  westTrichy,
  southTrichy
};
