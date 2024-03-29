module.exports = {
    room: [
        {
            id: 1,
            idHotel: '1',
            name: 'Habitación Suite',
            price: '250.682',
            image: 'room-suite.jpg',
            status: false,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Suite'
            },
            location: "Bogotá",
        },
        {
            id: 2,
            idHotel: '1',
            name: 'Habitación Preferencial',
            price: '300.000',
            image: 'room-preferencial.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "3 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '2',
                label: 'Preferencial'
            },
            location: "Bogotá",
        },
        {
            id: 3,
            idHotel: '1',
            name: 'Habitación Sencilla',
            price: '240.000',
            image: 'room-sencilla.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '15.000',
            roomType: {
                value: '1',
                label: 'Sencilla'
            },
            location: "Bogotá",
        },
        {
            id: 4,
            idHotel: '2',
            name: 'Habitación de Lujo',
            price: '350.000',
            image: 'room-suite.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 2", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Suite'
            },
            location: "Medellín",
        },
        {
            id: 5,
            idHotel: '2',
            name: 'Suite Ejecutiva',
            price: '450.000',
            image: 'room-preferencial.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 2", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '12.000',
            roomType: {
                value: '2',
                label: 'Preferencial'
            },
            location: "Medellín",
        },
        {
            id: 6,
            idHotel: '2',
            name: 'Habitación Estándar',
            price: '250.000',
            image: 'room-sencilla.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '1',
                label: 'Sencilla'
            },
            location: "Medellín",
        },
        {
            id: 7,
            idHotel: '3',
            name: 'Habitación Deluxe',
            price: '320.000',
            image: 'room-suite.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "3 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Suite'
            },
            location: "Cali",
        },
        {
            id: 8,
            idHotel: '3',
            name: 'Habitación Estándar',
            price: '280.000',
            image: 'room-preferencial.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "1 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Preferencial'
            },
            location: "Cali",
        },
        {
            id: 9,
            idHotel: '3',
            name: 'Suite Ejecutiva',
            price: '400.000',
            image: 'room-sencilla.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '1',
                label: 'Sencilla'
            },
            location: "Cali",
        },
        {
            id: 10,
            idHotel: '4',
            name: 'Habitación Vista al Mar',
            price: '450.000',
            image: 'room-suite.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Suite'
            },
            location: "Barranquilla",
        },
        {
            id: 11,
            idHotel: '4',
            name: 'Suite de Lujo',
            price: '600.000',
            image: 'room-preferencial.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 1", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "1 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '2',
                label: 'Preferencial'
            },
            location: "Barranquilla",
        },
        {
            id: 12,
            idHotel: '4',
            name: 'Habitación Estándar',
            price: '350.000',
            image: 'room-sencilla.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '1',
                label: 'Sencilla'
            },
            location: "Barranquilla",
        },
        {
            id: 13,
            idHotel: '5',
            name: 'Suite Colonial',
            price: '480.000',
            image: 'room-suite.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "1 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Suite'
            },
            location: "Cartagena",
        },
        {
            id: 14,
            idHotel: '5',
            name: 'Habitación Deluxe',
            price: '350.000',
            image: 'room-preferencial.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '2',
                label: 'Preferencial'
            },
            location: "Cartagena",
        },
        {
            id: 15,
            idHotel: '5',
            name: 'Habitación Estándar',
            price: '280.000',
            image: 'room-sencilla.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '1',
                label: 'Sencilla'
            },
            location: "Cartagena",
        },
        {
            id: 16,
            idHotel: '6',
            name: 'Suite Ejecutiva',
            price: '320.000',
            image: 'room-suite.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "1 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Suite'
            },
            location: "Cúcuta",
        },
        {
            id: 17,
            idHotel: '6',
            name: 'Habitación Deluxe',
            price: '280.000',
            image: 'room-preferencial.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 1", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "1 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '2',
                label: 'Preferencial'
            },
            location: "Cúcuta",
        },
        {
            id: 18,
            idHotel: '6',
            name: 'Habitación Estándar',
            price: '250.000',
            image: 'room-sencilla.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '1',
                label: 'Sencilla'
            },
            location: "Cúcuta",
        },
        {
            id: 19,
            idHotel: '7',
            name: 'Habitación de Lujo',
            price: '320.000',
            image: 'room-suite.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Suite'
            },
            location: "Bucaramanga",
        },
        {
            id: 20,
            idHotel: '7',
            name: 'Suite Ejecutiva',
            price: '450.000',
            image: 'room-preferencial.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "1 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '2',
                label: 'Preferencial'
            },
            location: "Bucaramanga",
        },
        {
            id: 21,
            idHotel: '7',
            name: 'Habitación Estándar',
            price: '280.000',
            image: 'room-sencilla.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 1", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "1 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '1',
                label: 'Sencilla'
            },
            location: "Bucaramanga",
        },
        {
            id: 22,
            idHotel: '8',
            name: 'Suite Ejecutiva',
            price: '400.000',
            image: 'room-suite.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Suite'
            },
            location: "Pereira",
        },
        {
            id: 23,
            idHotel: '8',
            name: 'Habitación Estándar',
            price: '320.000',
            image: 'room-preferencial.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '1',
                label: 'Sencilla'
            },
            location: "Pereira",
        },
        {
            id: 24,
            idHotel: '8',
            name: 'Habitación Familiar',
            price: '450.000',
            image: 'room-sencilla.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '2',
                label: 'Preferencial'
            },
            location: "Pereira",
        },
        {
            id: 25,
            idHotel: '9',
            name: 'Suite Familiar',
            price: '500.000',
            image: 'room-suite.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "1 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Suite'
            },
            location: "Santa Marta",
        },
        {
            id: 26,
            idHotel: '9',
            name: 'Habitación Doble',
            price: '280.000',
            image: 'room-preferencial.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '1',
                label: 'Sencilla'
            },
            location: "Santa Marta",
        },
        {
            id: 27,
            idHotel: '9',
            name: 'Habitación Suite',
            price: '350.000',
            image: 'room-sencilla.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "1 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '2',
                label: 'Preferencial'
            },
            location: "Santa Marta",
        },
        {
            id: 28,
            idHotel: '10',
            name: 'Suite Ejecutiva',
            price: '450.000',
            image: 'room-suite.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '3',
                label: 'Suite'
            },
            location: "Ibagué",
        },
        {
            id: 29,
            idHotel: '10',
            name: 'Habitación Doble',
            price: '300.000',
            image: 'room-preferencial.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 3", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '1',
                label: 'Sencilla'
            },
            location: "Ibagué",
        },
        {
            id: 30,
            idHotel: '10',
            name: 'Habitación Estándar',
            price: '250.000',
            image: 'room-sencilla.jpg',
            status: true,
            packagesIncluded: [
                { name: "Capacidad para 4", icon: 'FaUsers' },
                { name: "Desayuno buffet", icon: 'FaUtensils' },
                { name: "WiFi", icon: 'FaWifi' },
                { name: "Parqueadero", icon: 'FaCar' },
                { name: "2 camas", icon: 'FaBed' },
            ],
            taxes: '10.000',
            roomType: {
                value: '2',
                label: 'Preferencial'
            },
            location: "Ibagué",
        },
    ]
}