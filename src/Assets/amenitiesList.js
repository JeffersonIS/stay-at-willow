import * as Icons from '@fortawesome/free-solid-svg-icons'

const amenitiesList = [
    {
        label: "Bedrooms",
        subAmenitiesList: [
            {
                icon: Icons.faSprayCanSparkles,
                label: "Washer"
            },
            {
                icon: Icons.faFire,
                label: "Dryer"
            },
            {
                icon: Icons.faShirt,
                label: "Hangers"
            },
            {
                icon: Icons.faBed,
                label: "Fresh Sheets & Pillows"
            },
            {
                icon: Icons.faWindowMaximize,
                label: "Shades"
            },
            {
                icon: Icons.faDoorClosed,
                label: "Closet"
            },
        ]
    },
    {
        label: "Bathrooms",
        subAmenitiesList: [
            {
                icon: Icons.faPumpSoap,
                label: "Shampoo + Conditioner"
            },
            {
                icon: Icons.faSoap,
                label: "Soap"
            },
            {
                icon: Icons.faFaucet,
                label: "Hot Water"
            },
            {
                icon: Icons.faShower,
                label: "Shower"
            },
        ]
    },
    {
        label: "Entertainment",
        subAmenitiesList: [
            {
                icon: Icons.faTv,
                label: "TV with Roku"
            },
            {
                icon: Icons.faWifi,
                label: "Wifi"
            },
            {
                icon: Icons.faDesktop,
                label: "Workspace"
            },
        ]
    },
    {
        label: "Kitchen",
        subAmenitiesList: [
            {
                icon: Icons.faSink,
                label: "Sink"
            },
            {
                icon: Icons.faSnowflake,
                label: "Refrigerator + Freezer"
            },    
            {
                icon: Icons.faNewspaper,
                label: "Microwave"
            },             
            {
                icon: Icons.faKitchenSet,
                label: "Pots + Pans"
            },
            {
                icon: Icons.faUtensilSpoon,
                label: "Cooking Utensils"
            },
            {
                icon: Icons.faFireBurner,
                label: "Stovetop"
            },
            {
                icon: Icons.faMugHot,
                label: "Coffee Maker"
            },
            {
                icon: Icons.faPrescriptionBottle,
                label: "Oil, salt + pepper"
            },
        ]
    },
    {
        label: "Home Security & Entrance",
        subAmenitiesList: [
            {
                icon: Icons.faLock,
                label: "Keypad Entry"
            },
            {
                icon: Icons.faFire,
                label: "Fire Alarm"
            },
            {
                icon: Icons.faLandMineOn,
                label: "Carbon Monoxide Detector"
            },            
        ]
    },
    {
        label: "Other Amenities",
        subAmenitiesList: [
            {
                icon: Icons.faCar,
                label: "Ample Parking"
            },
            {
                icon: Icons.faWineBottle,
                label: "Winery Next Door"
            },
            {
                icon: Icons.faSun,
                label: "One Insane View"
            },
        ]
    },
];

export default amenitiesList;