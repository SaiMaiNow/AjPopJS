const services = [
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 48 48"><g fill="none"><path d="M39 32H13L8 12h36z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"/><circle cx="13" cy="39" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><circle cx="39" cy="39" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/></g></svg>',
        title: "ระบบ POS",
        description: "ระบบขายหน้าร้านที่ทันสมัย รองรับการชำระเงินหลากหลายรูปแบบ",
        features: ["การชำระเงินครบครัน", "รายงานยอดขายแบบเรียลไทม์", "จัดการสต็อกสินค้า", "ระบบสมาชิก"],
        detailedFeatures: [
            "รองรับการชำระเงินสด, บัตรเครดิต, QR Code, E-Wallet",
            "ระบบจัดการสินค้าและสต็อกแบบเรียลไทม์",
            "รายงานยอดขายและกำไรขาดทุนรายวัน/เดือน/ปี",
            "ระบบสมาชิกและโปรโมชั่น",
            "เชื่อมต่อกับเครื่องพิมพ์ใบเสร็จ",
            "ระบบแคชเชียร์หลายคน",
            "จัดการหมวดหมู่สินค้า",
            "ระบบคืนสินค้าและแลกเปลี่ยน"
        ],
        tiers: {
            small: {
                name: "ร้านเล็ก",
                price: "฿2,990",
                originalPrice: "฿3,990",
                features: [
                    "1 เครื่อง POS",
                    "สินค้าไม่จำกัด",
                    "รายงานพื้นฐาน",
                    "ระบบสมาชิก",
                    "การชำระเงินครบครัน",
                    "Support ในเวลาทำการ"
                ]
            },
            medium: {
                name: "ร้านกลาง",
                price: "฿5,990",
                originalPrice: "฿7,990",
                features: [
                    "3 เครื่อง POS",
                    "จัดการสาขา",
                    "รายงานขั้นสูง",
                    "ระบบสมาชิก",
                    "โปรโมชั่นและส่วนลด",
                    "เชื่อมต่อ E-commerce",
                    "24/7 Support"
                ]
            },
            large: {
                name: "ร้านใหญ่",
                price: "฿12,990",
                originalPrice: "฿16,990",
                features: [
                    "ไม่จำกัดเครื่อง POS",
                    "Multi-branch",
                    "API Integration",
                    "24/7 Support",
                    "Custom Dashboard",
                    "Advanced Analytics",
                    "Dedicated Account Manager"
                ]
            }
        }
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M277.334 64v341.333h128V192H320v-42.667h128v256h21.334V448H64v-.001L42.667 448v-42.667H64V64zm-42.667 42.667h-128v298.666h42.667v-64H192v64h42.667zm128 213.333v42.667H320V320zM192 234.667v42.666h-42.666v-42.666zm170.667 0v42.666H320v-42.666zM192 149.333V192h-42.666v-42.667z"/></svg>',
        title: "จัดการโรงแรม",
        description: "ระบบบริหารจัดการโรงแรมครบวงจร ตั้งแต่การจองถึงการเช็คเอาท์",
        features: ["จองห้องออนไลน์", "จัดการแขกและห้องพัก", "รายงานรายได้", "ระบบแม่บ้าน"],
        detailedFeatures: [
            "ระบบจองห้องออนไลน์และ Walk-in",
            "จัดการห้องพักและสถานะห้อง",
            "ระบบ Check-in/Check-out อัตโนมัติ",
            "จัดการแขกและประวัติการเข้าพัก",
            "ระบบแม่บ้านและการทำความสะอาด",
            "รายงานรายได้และอัตราการเข้าพัก",
            "ระบบจัดการราคาห้องตามฤดูกาล",
            "เชื่อมต่อกับ OTA (Booking.com, Agoda)"
        ],
        tiers: {
            small: {
                name: "โรงแรมเล็ก",
                price: "฿8,990",
                originalPrice: "฿11,990",
                features: [
                    "จัดการได้ 20 ห้อง",
                    "ระบบจองพื้นฐาน",
                    "รายงานมาตรฐาน",
                    "จัดการแขกและห้องพัก",
                    "ระบบแม่บ้าน",
                    "Support ในเวลาทำการ"
                ]
            },
            medium: {
                name: "โรงแรมกลาง",
                price: "฿15,990",
                originalPrice: "฿19,990",
                features: [
                    "จัดการได้ 100 ห้อง",
                    "Online Booking Engine",
                    "Channel Manager",
                    "PMS ครบครัน",
                    "Revenue Management",
                    "Mobile App",
                    "24/7 Support"
                ]
            },
            large: {
                name: "โรงแรมใหญ่",
                price: "฿29,990",
                originalPrice: "฿39,990",
                features: [
                    "ไม่จำกัดจำนวนห้อง",
                    "Multi Property Management",
                    "Advanced Analytics",
                    "Custom Integration",
                    "API Access",
                    "White Label Solution",
                    "Dedicated Support Team"
                ]
            }
        }
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24"><path fill="currentColor" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3"/></svg>',
        title: "จัดการที่พัก",
        description: "ระบบจัดการที่พักระยะสั้น อพาร์ตเมนต์ และเกสต์เฮ้าส์",
        features: ["จองออนไลน์", "จัดการผู้เช่า", "คำนวณค่าใช้จ่าย", "ระบบแจ้งเตือน"],
        detailedFeatures: [
            "ระบบจองที่พักออนไลน์",
            "จัดการข้อมูลผู้เช่าและสัญญาเช่า",
            "คำนวณค่าเช่าและค่าใช้จ่ายต่างๆ",
            "ระบบแจ้งเตือนการชำระเงิน",
            "จัดการการซ่อมแซมและบำรุงรักษา",
            "รายงานรายได้และค่าใช้จ่าย",
            "ระบบจัดการกุญแจและการเข้าออก",
            "แจ้งเตือนสัญญาหมดอายุ"
        ],
        tiers: {
            small: {
                name: "ที่พักเล็ก",
                price: "฿4,990",
                originalPrice: "฿6,990",
                features: [
                    "จัดการได้ 10 ห้อง",
                    "ระบบจองพื้นฐาน",
                    "จัดการผู้เช่า",
                    "คำนวณค่าเช่า",
                    "ระบบแจ้งเตือน",
                    "Support ในเวลาทำการ"
                ]
            },
            medium: {
                name: "ที่พักกลาง",
                price: "฿9,990",
                originalPrice: "฿12,990",
                features: [
                    "จัดการได้ 50 ห้อง",
                    "Online Booking Platform",
                    "Payment Gateway",
                    "Advanced Reports",
                    "Mobile App",
                    "Maintenance Management",
                    "24/7 Support"
                ]
            },
            large: {
                name: "ที่พักใหญ่",
                price: "฿18,990",
                originalPrice: "฿24,990",
                features: [
                    "ไม่จำกัดจำนวนห้อง",
                    "Multi Location Management",
                    "Advanced Features",
                    "API Access",
                    "Custom Integration",
                    "White Label",
                    "Dedicated Account Manager"
                ]
            }
        }
    },
    {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 16 16"><path fill="currentColor" d="m14.447 3.724l-6-3a1 1 0 0 0-.894 0l-6 3A1 1 0 0 0 1 4.618v6.764a1 1 0 0 0 .553.894l6 3a1 1 0 0 0 .894 0l6-3a1 1 0 0 0 .553-.894V4.618a1 1 0 0 0-.553-.894M5.871 5.897l5.343-2.672l2.158 1.079L8 6.943ZM8 1.618l2.096 1.048l-5.353 2.677l-2.115-1.039ZM2 5.11l2.25 1.105V9a.5.5 0 0 0 1 0V6.706L7.5 7.811v6.321L2 11.382Zm6.5 9.022v-6.32L14 5.11v6.272Z"/></svg>',
        title: "จัดการคลังสินค้า",
        description: "ระบบบริหารจัดการคลังสินค้าและโลจิสติกส์แบบครบวงจร",
        features: ["ระบบ Barcode/QR", "ติดตามสินค้า", "จัดการ Stock", "รายงานคลังสินค้า"],
        detailedFeatures: [
            "ระบบ Barcode และ QR Code สำหรับสินค้า",
            "ติดตามการเคลื่อนไหวสินค้าแบบเรียลไทม์",
            "จัดการ Stock และ Inventory",
            "ระบบรับ-จ่ายสินค้า",
            "จัดการ Supplier และ Purchase Order",
            "รายงานคลังสินค้าและการเคลื่อนไหว",
            "ระบบแจ้งเตือน Stock ต่ำ",
            "จัดการหลายคลังสินค้า"
        ],
        tiers: {
            small: {
                name: "คลังเล็ก",
                price: "฿6,990",
                originalPrice: "฿8,990",
                features: [
                    "จัดการได้ 1,000 รายการ",
                    "Basic Inventory Tracking",
                    "รายงานพื้นฐาน",
                    "ระบบ Barcode",
                    "จัดการ Supplier",
                    "Support ในเวลาทำการ"
                ]
            },
            medium: {
                name: "คลังกลาง",
                price: "฿12,990",
                originalPrice: "฿16,990",
                features: [
                    "จัดการได้ 10,000 รายการ",
                    "Advanced WMS",
                    "Multi Location",
                    "System Integration",
                    "Advanced Reports",
                    "Mobile App",
                    "24/7 Support"
                ]
            },
            large: {
                name: "คลังใหญ่",
                price: "฿24,990",
                originalPrice: "฿32,990",
                features: [
                    "ไม่จำกัดรายการสินค้า",
                    "Enterprise WMS",
                    "Full Automation",
                    "Custom Development",
                    "API Integration",
                    "Advanced Analytics",
                    "Dedicated Support Team"
                ]
            }
        }
    }
];

const testimonials = [
    {
        name: "คุณสมชาย วิทยากุล",
        position: "เจ้าของร้านอาหาร ABC",
        company: "ร้านอาหาร ABC",
        image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        rating: 5,
        text: "ใช้ระบบ POS มา 2 ปีแล้ว ช่วยให้การจัดการร้านง่ายขึ้นมาก รายงานยอดขายแม่นยำ ทีมงานให้การสนับสนุนดีมาก"
    },
    {
        name: "คุณนิภา โรงแรมสวย",
        position: "ผู้จัดการโรงแรม",
        company: "โรงแรมสวยงาม",
        image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        rating: 5,
        text: "ระบบจัดการโรงแรมครบครัน ตั้งแต่การจองจนถึงการเช็คเอาท์ ช่วยเพิ่มประสิทธิภาพการทำงานได้มาก"
    },
    {
        name: "คุณวิชัย คลังใหญ่",
        position: "ผู้จัดการคลังสินค้า",
        company: "บริษัท คลังใหญ่ จำกัด",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        rating: 5,
        text: "ระบบจัดการคลังสินค้าช่วยให้เราติดตามสินค้าได้แม่นยำ ลดการสูญหายและเพิ่มประสิทธิภาพการทำงาน"
    }
];

function renderTestimonials() {
    const testimonialsList = document.getElementById("testimonials-list");
    testimonialsList.innerHTML = testimonials.map(testimonial => `
        <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
            <div class="flex items-center mb-6">
                <img src="${testimonial.image}" alt="${testimonial.name}"
                    class="w-16 h-16 rounded-full mr-4 object-cover" />
                <div>
                    <h4 class="text-white font-bold">${testimonial.name}</h4>
                    <p class="text-white/70 text-sm">${testimonial.position}</p>
                    <p class="text-white/60 text-sm">${testimonial.company}</p>
                </div>
            </div>

            <div class="flex mb-4">
                ${Array(testimonial.rating).fill().map(() => `
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"/>
                    </svg>
                `).join("")}
            </div>

            <p class="text-white/80 italic">"${testimonial.text}"</p>
        </div>
    `).join("");
}

// Scroll to top functionality
function handleScroll() {
    const scrollButton = document.getElementById("scroll-to-top");
    if (window.scrollY > 300) { // แสดงปุ่มเมื่อเลื่อนลงมามากกว่า 300px
        scrollButton.classList.remove("opacity-0", "translate-y-10");
        scrollButton.classList.add("opacity-100", "translate-y-0");
    } else {
        scrollButton.classList.add("opacity-0", "translate-y-10");
        scrollButton.classList.remove("opacity-100", "translate-y-0");
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // ทำให้การเลื่อนขึ้นบนเป็นแบบ smooth
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Scroll to top button
    const scrollButton = document.getElementById("scroll-to-top");
    scrollButton.addEventListener("click", scrollToTop);
    window.addEventListener("scroll", handleScroll);

    const servicesList = document.getElementById("services-list");
    services.forEach(service => {
        const div = document.createElement("div");
        div.classList.add("bg-white/10", "backdrop-blur-md", "rounded-2xl", "border", "border-white/20", "p-8", "hover:bg-white/15", "transition-all", "duration-300", "cursor-pointer", "transform", "hover:scale-105");
        div.onclick = () => onSelectServices(service);
        div.innerHTML = `
            <div class="text-white mb-6">${service.icon}</div>
            <h3 class="text-2xl font-bold text-white mb-4">${service.title}</h3>
            <p class="text-white/70 mb-6">${service.description}</p>
            <ul class="space-y-2">
                ${service.features.map(feature => `<li class="flex items-center text-white/80">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 text-green-400" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/></svg>
                    ${feature}
                </li>`).join("")}
            </ul>
        `;
        servicesList.appendChild(div);
    });

    onSelectServices(services[0]);
    renderPricing();
    renderTestimonials(); // เรียกใช้ renderTestimonials เมื่อโหลดหน้าเว็บ
});

let activeService = 0;

function setActiveService(index) {
    activeService = index;
    renderPricing();
    onSelectServices(services[index]);
}

function renderPricing() {
    const pricingButtons = document.getElementById("pricing-buttons");
    const pricingTiers = document.getElementById("pricing-tiers");

    // Render service buttons
    pricingButtons.innerHTML = services.map((service, index) => `
        <button onclick="setActiveService(${index})"
            class="px-6 py-3 rounded-xl transition-all ${activeService === index
            ? 'bg-white text-[#2F36C9]'
            : 'bg-white/20 text-white hover:bg-white/30'
        }">
            ${service.title}
        </button>
    `).join("");

    // Render pricing tiers
    pricingTiers.innerHTML = Object.entries(services[activeService].tiers).map(([size, tier]) => `
        <div class="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8
            relative ${size === 'medium' ? 'transform scale-105 border-white/40' : ''}">
            ${size === 'medium' ? `
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div class="bg-gradient-to-r from-[#2F36C9] to-white text-white px-4 py-2 rounded-full text-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-1" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"/>
                    </svg>
                    แนะนำ
                </div>
            </div>
            ` : ''}

            <div class="text-center mb-8">
                <div class="flex items-center justify-center mb-4">
                    ${size === 'small' ? `
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></g></svg>
                    ` : size === 'medium' ? `
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></g></svg>
                    ` : `
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" viewBox="-2 -4 24 24"><path fill="currentColor" d="M2.776 5.106L3.648 11h12.736l.867-5.98l-3.493 3.02l-3.755-4.827l-3.909 4.811zm10.038-1.537l-.078.067l.141.014l1.167 1.499l1.437-1.242l.14.014l-.062-.082l2.413-2.086a1 1 0 0 1 1.643.9L18.115 13H1.922L.399 2.7a1 1 0 0 1 1.65-.898L4.35 3.827l-.05.06l.109-.008l1.444 1.27l1.212-1.493l.109-.009l-.06-.052L9.245.976a1 1 0 0 1 1.565.017zM2 14h16v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/></svg>
                    `}
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">${tier.name}</h3>
                ${tier.originalPrice ? `
                    <div class="text-lg text-white/50 line-through mb-1">${tier.originalPrice}</div>
                ` : ''}
                <div class="text-4xl font-bold text-white mb-2">${tier.price}</div>
                <p class="text-white/70">รายเดือน</p>
                ${tier.originalPrice ? `
                    <div class="bg-green-500 text-white px-3 py-1 rounded-full text-sm mt-2 inline-block">
                        ประหยัด 25%
                    </div>
                ` : ''}
            </div>

            <ul class="space-y-3 mb-8">
                ${tier.features.map(feature => `
                    <li class="flex items-center text-white/80">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3 text-green-400" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/>
                        </svg>
                        ${feature}
                    </li>
                `).join("")}
            </ul>

            <button class="w-full bg-white text-[#2F36C9] py-3 rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105">
                เลือกแพ็กเกจ
            </button>
        </div>
    `).join("");
}

function onSelectServices(service) {
    document.getElementById("service-detail-icon").innerHTML = service.icon;
    document.getElementById("service-detail-title").textContent = service.title;
    document.getElementById("service-detail-description").textContent = service.description;
    document.getElementById("service-detail-feature").innerHTML = '';

    service.detailedFeatures.forEach(feature => {
        const div = document.createElement("div");
        div.classList.add('bg-white/10', 'backdrop-blur-md', 'rounded-xl', 'border', 'border-white/20', 'p-4');

        const div2 = document.createElement("div");
        div2.classList.add('flex', 'items-start');

        div2.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-3 text-green-400 mt-0.5 flex-shrink-0" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"/></svg>
            <span class="text-white/80">${feature}</span>
        `;

        div.appendChild(div2);
        document.getElementById("service-detail-feature").appendChild(div);
    });
}