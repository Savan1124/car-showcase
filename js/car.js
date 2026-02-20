        const carsData = [
            {
                id: 1,
                name: "Ferrari 488 GTB",
                category: "sports",
                price: "$280,000",
                image: "./carimg/Ferrari-488-gtb.avif",
                badge: "New",
                specs: {
                    engine: "V8 Twin-Turbo",
                    power: "660 HP",
                    acceleration: "0-60 in 3.0s",
                    topSpeed: "205 mph",
                    transmission: "7-Speed Dual-Clutch",
                    drivetrain: "Rear-Wheel Drive",
                    fuel: "Premium Gasoline",
                    seats: "2",
                    doors: "2"
                },
                gallery: [
                    "./carimg/Ferrari-488-gtb.avif",
                    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/oP-nXiZp3Oc?si=SPEgpduwlH_rTMix",
                description: "The Ferrari 488 GTB is a masterpiece of Italian engineering, combining breathtaking performance with stunning design. This mid-engine sports car represents the perfect balance between track capability and everyday drivability.",
                features: [
                    "Carbon Fiber Body Panels",
                    "Magnetic Ride Suspension",
                    "Carbon Ceramic Brakes",
                    "Launch Control System",
                    "Premium Leather Interior",
                    "Bose Sound System",
                    "LED Headlights",
                    "Rear Parking Camera"
                ]
            },
            {
                id: 2,
                name: "Tesla Model X",
                category: "suv",
                price: "$98,000",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MD3FGDAcFaJhpyrmwtm2fxBPb7FpU-trBw&s",
                badge: "Popular",
                specs: {
                    engine: "Dual Electric Motors",
                    power: "670 HP",
                    acceleration: "0-60 in 2.5s",
                    topSpeed: "155 mph",
                    transmission: "Single-Speed",
                    drivetrain: "All-Wheel Drive",
                    fuel: "Electric",
                    seats: "7",
                    doors: "5"
                },
                gallery: [
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4MD3FGDAcFaJhpyrmwtm2fxBPb7FpU-trBw&s",
                    "https://images.unsplash.com/photo-1593941707882-a5bac476e235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/BJfGlBsecU0?si=Budgh5RVYxUGTaWm",
                description: "The Tesla Model X redefines the SUV category with its groundbreaking electric powertrain, falcon-wing doors, and cutting-edge autonomous driving capabilities. Experience the future of mobility today.",
                features: [
                    "Falcon Wing Doors",
                    "Autopilot System",
                    "17\" Touchscreen Display",
                    "Premium Audio System",
                    "Heated & Ventilated Seats",
                    "Panoramic Glass Roof",
                    "Towing Capacity: 5,000 lbs",
                    "Supercharger Network Access"
                ]
            },
            {
                id: 3,
                name: "Mercedes-Benz S-Class",
                category: "sedan",
                price: "$115,000",
                image: "https://images.unsplash.com/photo-1680446983373-853872fb667a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cyUyMGNsYXNzfGVufDB8fDB8fHww",
                badge: "Premium",
                specs: {
                    engine: "V6 Twin-Turbo",
                    power: "450 HP",
                    acceleration: "0-60 in 4.5s",
                    topSpeed: "155 mph",
                    transmission: "9-Speed Automatic",
                    drivetrain: "Rear-Wheel Drive",
                    fuel: "Premium Gasoline",
                    seats: "5",
                    doors: "4"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1680446983373-853872fb667a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cyUyMGNsYXNzfGVufDB8fDB8fHww",
                    "https://images.unsplash.com/photo-1617654112368-307921296012?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1606664515524-edf2240a49d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1610348849007-af47a06815d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/-4zsY28t76k?si=b_gPD2ektHfkvWIg",
                description: "The Mercedes-Benz S-Class sets the standard for luxury sedans with its innovative technology, exceptional comfort, and timeless elegance. Every journey becomes an extraordinary experience.",
                features: [
                    "MBUX Infotainment System",
                    "Burmeister Audio System",
                    "Energizing Comfort Control",
                    "Air Balance Package",
                    "Executive Rear Seats",
                    "Night Vision Assist",
                    "Active Parking Assist",
                    "Wireless Charging"
                ]
            },
            {
                id: 4,
                name: "Porsche Taycan",
                category: "electric",
                price: "$185,000",
                image: "https://4kwallpapers.com/images/walls/thumbs_2t/23253.jpeg",
                specs: {
                    engine: "Dual Electric Motors",
                    power: "750 HP",
                    acceleration: "0-60 in 2.6s",
                    topSpeed: "161 mph",
                    transmission: "2-Speed",
                    drivetrain: "All-Wheel Drive",
                    fuel: "Electric",
                    seats: "4",
                    doors: "4"
                },
                gallery: [
                    "https://4kwallpapers.com/images/walls/thumbs_2t/23253.jpeg",
                    "https://images.unsplash.com/photo-1556820948-9a9f1c61386e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/9AlBBetWY_E?si=Ww0tk_PYqaP7DC9Y",
                description: "The Porsche Taycan delivers pure electric performance with the soul of a sports car. Experience instant acceleration, precise handling, and innovative charging technology.",
                features: [
                    "800V Architecture",
                    "Porsche Sport Chrono",
                    "Adaptive Air Suspension",
                    "Porsche InnoDrive",
                    "Bose Surround Sound",
                    "Heat Pump System",
                    "GT Sport Steering Wheel",
                    "Porsche Connect"
                ]
            },
            {
                id: 5,
                name: "Lamborghini Huracán",
                category: "sports",
                price: "$320,000",
                image: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                badge: "Limited",
                specs: {
                    engine: "V10 Naturally Aspirated",
                    power: "630 HP",
                    acceleration: "0-60 in 2.9s",
                    topSpeed: "202 mph",
                    transmission: "7-Speed Dual-Clutch",
                    drivetrain: "All-Wheel Drive",
                    fuel: "Premium Gasoline",
                    seats: "2",
                    doors: "2"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/Su7cGCX_mq4?",
                description: "The Lamborghini Huracán embodies the raging bull spirit with its breathtaking design and thunderous V10 engine. Every drive is an adrenaline-fueled adventure.",
                features: [
                    "Carbon Fiber Package",
                    "Lamborghini Dynamic Steering",
                    "Magnetorheological Suspension",
                    "Lift System",
                    "ANIMA Driving Modes",
                    "TFT Digital Display",
                    "Premium Alcantara Interior",
                    "Navigation System"
                ]
            },
            {
                id: 6,
                name: "BMW X7",
                category: "suv",
                price: "$88,000",
                image: "https://i.pinimg.com/736x/22/42/af/2242af0d1282e9d459ab63b53a65e19e.jpg",
                badge: "Best Value",
                specs: {
                    engine: "V6 Twin-Turbo",
                    power: "375 HP",
                    acceleration: "0-60 in 5.8s",
                    topSpeed: "145 mph",
                    transmission: "8-Speed Automatic",
                    drivetrain: "All-Wheel Drive",
                    fuel: "Premium Gasoline",
                    seats: "7",
                    doors: "5"
                },
                gallery: [
                    "https://i.pinimg.com/736x/22/42/af/2242af0d1282e9d459ab63b53a65e19e.jpg",
                    "https://images.unsplash.com/photo-1593941707882-a5bac476e235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/hxD1d-wR1Qg?si=0YZHpvCj1tKPbP4_",
                description: "The BMW X7 combines luxury, space, and performance in a stunning package. Experience ultimate comfort with cutting-edge technology and dynamic driving capabilities.",
                features: [
                    "Air Suspension",
                    "Glass Control Switches",
                    "Live Cockpit Professional",
                    "Harman Kardon Audio",
                    "Panoramic Moonroof",
                    "Executive Package",
                    "Driving Assistant",
                    "Remote Engine Start"
                ]
            },
            {
                id: 7,
                name: "Audi A8",
                category: "sedan",
                price: "$105,000",
                image: "https://wallpaper.forfun.com/fetch/7e/7eede341f9dd3a8dda3c4b897914cd22.jpeg",
                badge: "Luxury",
                specs: {
                    engine: "V6 Turbocharged",
                    power: "335 HP",
                    acceleration: "0-60 in 5.6s",
                    topSpeed: "130 mph",
                    transmission: "8-Speed Automatic",
                    drivetrain: "All-Wheel Drive",
                    fuel: "Premium Gasoline",
                    seats: "5",
                    doors: "4"
                },
                gallery: [
                    "https://wallpaper.forfun.com/fetch/7e/7eede341f9dd3a8dda3c4b897914cd22.jpeg",
                    "https://images.unsplash.com/photo-1617654112368-307921296012?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1606664515524-edf2240a49d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1610348849007-af47a06815d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
                description: "The Audi A8 represents the pinnacle of German engineering and luxury. Experience sophisticated design, advanced technology, and unparalleled comfort.",
                features: [
                    "MMI Touch Response",
                    "Bang & Olufsen Sound",
                    "Four-Wheel Steering",
                    "Executive Rear Lounge",
                    "Matrix LED Headlights",
                    "Traffic Jam Pilot",
                    "Rear Seat Entertainment",
                    "Massaging Seats"
                ]
            },
            {
                id: 8,
                name: "Rivian R1T",
                category: "electric",
                price: "$95,000",
                image: "https://w0.peakpx.com/wallpaper/528/648/HD-wallpaper-2021-rivian-r1t-electric-pickup-front-three-quarter-car.jpg",
                badge: "Innovation",
                specs: {
                    engine: "Quad Electric Motors",
                    power: "835 HP",
                    acceleration: "0-60 in 3.0s",
                    topSpeed: "125 mph",
                    transmission: "Single-Speed",
                    drivetrain: "All-Wheel Drive",
                    fuel: "Electric",
                    seats: "5",
                    doors: "4"
                },
                gallery: [
                    "https://w0.peakpx.com/wallpaper/528/648/HD-wallpaper-2021-rivian-r1t-electric-pickup-front-three-quarter-car.jpg",
                    "https://images.unsplash.com/photo-1556820948-9a9f1c61386e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/ZErzk_07UzM?si=DAhq6ADX7KguUiw3",
                description: "The Rivian R1T is revolutionizing the electric truck segment with its impressive capabilities, innovative features, and sustainable design.",
                features: [
                    "Gear Tunnel",
                    "Camp Kitchen",
                    "Air Suspension",
                    "Tank Turn",
                    "Meridian Audio System",
                    "All-Terrain Tires",
                    "Wade Depth: 3.5 ft",
                    "Towing: 11,000 lbs"
                ]
            },
            {
                id: 9,
                name: "McLaren 720S",
                category: "sports",
                price: "$350,000",
                image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                badge: "Exclusive",
                specs: {
                    engine: "V8 Twin-Turbo",
                    power: "710 HP",
                    acceleration: "0-60 in 2.8s",
                    topSpeed: "212 mph",
                    transmission: "7-Speed Dual-Clutch",
                    drivetrain: "Rear-Wheel Drive",
                    fuel: "Premium Gasoline",
                    seats: "2",
                    doors: "2"
                },
                gallery: [
                    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/K4D0dAkUMpo?si=b-eapzU9ptFkkn5O",
                description: "The McLaren 720S pushes the boundaries of supercar performance with its revolutionary carbon fiber construction and blistering speed.",
                features: [
                    "Monocage II Chassis",
                    "Active Chassis Control",
                    "Brake Steer",
                    "Variable Drift Control",
                    "Carbon Fiber Interior",
                    "Bowers & Wilkins Audio",
                    "Telemetry System",
                    "Lift System"
                ]
            },
            {
                id: 10,
                name: "Range Rover Sport",
                category: "suv",
                price: "$92,000",
                image: "https://pixelz.cc/wp-content/uploads/2023/09/range-rover-sport-sv-uhd-4k-wallpaper.jpg",
                badge: "Premium",
                specs: {
                    engine: "V6 Supercharged",
                    power: "395 HP",
                    acceleration: "0-60 in 6.0s",
                    topSpeed: "140 mph",
                    transmission: "8-Speed Automatic",
                    drivetrain: "All-Wheel Drive",
                    fuel: "Premium Gasoline",
                    seats: "7",
                    doors: "5"
                },
                gallery: [
                    "https://pixelz.cc/wp-content/uploads/2023/09/range-rover-sport-sv-uhd-4k-wallpaper.jpg",
                    "https://images.unsplash.com/photo-1593941707882-a5bac476e235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/iQlmLAH82cE?si=M1baFxUCra0k48IE",
                description: "The Range Rover Sport combines British luxury with exceptional off-road capability and on-road performance. Adventure awaits.",
                features: [
                    "Terrain Response 2",
                    "Electronic Air Suspension",
                    "Wade Sensing",
                    "ClearSight Mirror",
                    "Meridian Audio",
                    "Touch Pro Duo",
                    "Activity Key",
                    "Configurable Terrain"
                ]
            },
            {
                id: 11,
                name: "Genesis G90",
                category: "sedan",
                price: "$78,000",
                image: "https://i.ytimg.com/vi/4809PSqN7P4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC34eGNXZE6rLEyuE8T0oEXrBNlZg",
                badge: "Luxury",
                specs: {
                    engine: "V6 Twin-Turbo",
                    power: "375 HP",
                    acceleration: "0-60 in 5.2s",
                    topSpeed: "150 mph",
                    transmission: "8-Speed Automatic",
                    drivetrain: "Rear-Wheel Drive",
                    fuel: "Premium Gasoline",
                    seats: "5",
                    doors: "4"
                },
                gallery: [
                    "https://i.ytimg.com/vi/4809PSqN7P4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC34eGNXZE6rLEyuE8T0oEXrBNlZg",
                    "https://images.unsplash.com/photo-1617654112368-307921296012?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1606664515524-edf2240a49d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1610348849007-af47a06815d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/lg_-sunEKHo?si=pye2Ad0StldP56vi",
                description: "The Genesis G90 offers uncompromising luxury with Korean craftsmanship and cutting-edge technology at an exceptional value.",
                features: [
                    "Lexicon Audio System",
                    "22-Way Power Seats",
                    "Smart Posture Care",
                    "Digital Instrument Cluster",
                    "3D Gesture View",
                    "Valet Mode",
                    "Remote Parking",
                    "Highway Driving Assist"
                ]
            },
            {
                id: 12,
                name: "Lucid Air Dream",
                category: "electric",
                price: "$169,000",
                image: "https://lucidmotors.com/s3fs-public/2022-10/slideshow-00-regular.webp",
                badge: "Premium",
                specs: {
                    engine: "Dual Electric Motors",
                    power: "1,111 HP",
                    acceleration: "0-60 in 2.5s",
                    topSpeed: "168 mph",
                    transmission: "Single-Speed",
                    drivetrain: "All-Wheel Drive",
                    fuel: "Electric",
                    seats: "5",
                    doors: "4"
                },
                gallery: [
                    "https://lucidmotors.com/s3fs-public/2022-10/slideshow-00-regular.webp",
                    "https://images.unsplash.com/photo-1556820948-9a9f1c61386e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                video: "https://www.youtube.com/embed/6mEB8f0MrLs?si=PtlnNx4xQSOVYOmx",
                description: "The Lucid Air Dream Edition represents the pinnacle of electric luxury, combining unprecedented range with breathtaking performance and exquisite craftsmanship.",
                features: [
                    "500+ Mile Range",
                    "DreamDrive Pro",
                    "Surreal Sound System",
                    "Glass Canopy Roof",
                    "Executive Rear Seating",
                    "Fast Charging: 300kW",
                    "Air Suspension",
                    "Nappa Leather Interior"
                ]
            }
        ];

const preloader = document.querySelector('.preloader');
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const carGrid = document.getElementById('carGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const testDriveForm = document.getElementById('testDriveForm');
const serviceForm = document.getElementById('serviceForm');
const newsletterForm = document.getElementById('newsletterForm');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const toastClose = document.getElementById('toastClose');
const testCarSelect = document.getElementById('testCar');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const carDetailsModal = document.getElementById('carDetailsModal');
const modalClose = document.getElementById('modalClose');
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);
}
function updateThemeToggle(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeText.textContent = 'Light';
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeText.textContent = 'Dark';
    }
}
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
    
    showToast(`Switched to ${newTheme} mode`);
});
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000);
    renderCars('all');
    populateCarSelect();
    observeElements();
});
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-times');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});
function renderCars(category) {
    carGrid.innerHTML = '';
    
    const filteredCars = category === 'all' 
        ? carsData 
        : carsData.filter(car => car.category === category);
    
    filteredCars.forEach((car, index) => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card fade-in';
        carCard.style.animationDelay = `${index * 0.1}s`;
        
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
                <span class="car-badge">${car.badge}</span>
            </div>
            <div class="car-details">
                <h3>${car.name}</h3>
                <div class="car-specs">
                    <div class="spec-item">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>${car.specs.power}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-rocket"></i>
                        <span>${car.specs.acceleration}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-gauge-high"></i>
                        <span>${car.specs.topSpeed}</span>
                    </div>
                </div>
                <div class="car-price">${car.price}</div>
                <div class="car-actions">
                    <button class="btn btn-primary" onclick="selectCarForTestDrive(${car.id})">Test Drive</button>
                    <button class="btn btn-secondary" onclick="showCarDetails(${car.id})">Details</button>
                </div>
            </div>
        `;
        
        carGrid.appendChild(carCard);
    });
    observeElements();
}
function populateCarSelect() {
    testCarSelect.innerHTML = '<option value="">Choose a car</option>';
    
    carsData.forEach(car => {
        const option = document.createElement('option');
        option.value = car.id;
        option.textContent = `${car.name} - ${car.price}`;
        testCarSelect.appendChild(option);
    });
}
function selectCarForTestDrive(carId) {
    document.getElementById('testCar').value = carId;
    document.getElementById('test-drive').scrollIntoView({ behavior: 'smooth' });
}
function stopVideo() {
    const iframe = document.getElementById('modalVideo');
    if (iframe) {
        const videoSrc = iframe.src;
        iframe.src = '';
        setTimeout(() => {
            iframe.src = videoSrc;
        }, 100);
    }
}

function showCarDetails(carId) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
    
    document.getElementById('modalMainImage').src = car.image;
    document.getElementById('modalMainImage').alt = car.name;
    
    const gallery = document.getElementById('imageGallery');
    gallery.innerHTML = '';
    car.gallery.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = `gallery-thumb ${index === 0 ? 'active' : ''}`;
        thumb.innerHTML = `<img src="${img}" alt="${car.name} ${index + 1}">`;
        thumb.onclick = () => {
            document.getElementById('modalMainImage').src = img;
            document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
        gallery.appendChild(thumb);
    });
    
    document.getElementById('modalTitle').textContent = car.name;
    document.getElementById('modalPrice').textContent = car.price;
    
    document.getElementById('modalVideo').src = car.video;
    
    const specsGrid = document.getElementById('modalSpecs');
    specsGrid.innerHTML = `
        <div class="spec-card">
            <i class="fas fa-engine"></i>
            <h4>Engine</h4>
            <p>${car.specs.engine}</p>
        </div>
        <div class="spec-card">
            <i class="fas fa-bolt"></i>
            <h4>Power</h4>
            <p>${car.specs.power}</p>
        </div>
        <div class="spec-card">
            <i class="fas fa-rocket"></i>
            <h4>Acceleration</h4>
            <p>${car.specs.acceleration}</p>
        </div>
        <div class="spec-card">
            <i class="fas fa-tachometer-alt"></i>
            <h4>Top Speed</h4>
            <p>${car.specs.topSpeed}</p>
        </div>
        <div class="spec-card">
            <i class="fas fa-cogs"></i>
            <h4>Transmission</h4>
            <p>${car.specs.transmission}</p>
        </div>
        <div class="spec-card">
            <i class="fas fa-road"></i>
            <h4>Drivetrain</h4>
            <p>${car.specs.drivetrain}</p>
        </div>
        <div class="spec-card">
            <i class="fas fa-gas-pump"></i>
            <h4>Fuel Type</h4>
            <p>${car.specs.fuel}</p>
        </div>
        <div class="spec-card">
            <i class="fas fa-users"></i>
            <h4>Seats</h4>
            <p>${car.specs.seats} Seats</p>
        </div>
    `;
    
    document.getElementById('modalDescription').textContent = car.description;
    
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    car.features.forEach(feature => {
        const featureItem = document.createElement('div');
        featureItem.className = 'feature-item';
        featureItem.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${feature}</span>
        `;
        featuresList.appendChild(featureItem);
    });
    
    carDetailsModal.setAttribute('data-car-id', carId);
    
    carDetailsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

modalClose.addEventListener('click', () => {
    stopVideo();
    carDetailsModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

carDetailsModal.addEventListener('click', (e) => {
    if (e.target === carDetailsModal) {
        stopVideo();
        carDetailsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

function bookTestDriveFromModal() {
    const carId = carDetailsModal.getAttribute('data-car-id');
    stopVideo();
    carDetailsModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    selectCarForTestDrive(parseInt(carId));
}

function requestQuoteFromModal() {
    const carId = carDetailsModal.getAttribute('data-car-id');
    const car = carsData.find(c => c.id === parseInt(carId));
    if (car) {
        showToast(`Quote request sent for ${car.name}!`);
        stopVideo();
        carDetailsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        renderCars(btn.dataset.filter);
    });
});

testDriveForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('testName').value,
        email: document.getElementById('testEmail').value,
        phone: document.getElementById('testPhone').value,
        carId: document.getElementById('testCar').value,
        date: document.getElementById('testDate').value,
        time: document.getElementById('testTime').value,
        message: document.getElementById('testMessage').value
    };
    
    console.log('Test Drive Form Data:', formData);
    
    showToast('Your test drive has been booked successfully!');
    
    testDriveForm.reset();
});

serviceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('serviceName').value,
        email: document.getElementById('serviceEmail').value,
        phone: document.getElementById('servicePhone').value,
        car: document.getElementById('serviceCar').value,
        date: document.getElementById('serviceDate').value,
        type: document.getElementById('serviceType').value,
        description: document.getElementById('serviceDescription').value
    };
    
    console.log('Service Form Data:', formData);
    
    showToast('Your service has been scheduled successfully!');
    
    serviceForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    console.log('Newsletter Subscription:', email);
    
    showToast('You have been subscribed to our newsletter!');
    
    newsletterForm.reset();
});

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

toastClose.addEventListener('click', () => {
    toast.classList.remove('show');
});

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

const today = new Date().toISOString().split('T')[0];
document.getElementById('testDate').setAttribute('min', today);
document.getElementById('serviceDate').setAttribute('min', today);

initTheme();