import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Building2, 
  Home, 
  Package, 
  Users, 
  Building, 
  Crown,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Check,
  Shield,
  Clock,
  Award,
  TrendingUp,
  Zap,
  HeadphonesIcon,
  Globe,
  Database,
  Smartphone,
  Wifi,
  BarChart3
} from 'lucide-react';

function App() {
  const [activeService, setActiveService] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
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
      icon: <Building2 className="w-8 h-8" />,
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
      icon: <Home className="w-8 h-8" />,
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
      icon: <Package className="w-8 h-8" />,
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

  const stats = [
    { number: "500+", label: "ลูกค้าที่ไว้วางใจ", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "ปีประสบการณ์", icon: <Award className="w-8 h-8" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="w-8 h-8" /> },
    { number: "24/7", label: "การสนับสนุน", icon: <HeadphonesIcon className="w-8 h-8" /> }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "ความปลอดภัยสูง",
      description: "ระบบรักษาความปลอดภัยระดับธนาคาร เข้ารหัสข้อมูลทุกการทำงาน"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "ใช้งานง่าย รวดเร็ว",
      description: "ออกแบบให้ใช้งานง่าย เรียนรู้ได้เร็ว ประหยัดเวลาในการทำงาน"
    },
    {
      icon: <HeadphonesIcon className="w-12 h-12" />,
      title: "สนับสนุน 24/7",
      description: "ทีมงานผู้เชี่ยวชาญพร้อมให้การสนับสนุนตลอด 24 ชั่วโมง"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "เพิ่มยอดขาย",
      description: "ระบบช่วยวิเคราะห์ข้อมูลเพื่อเพิ่มยอดขายและลดต้นทุน"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "รองรับทุกอุปกรณ์",
      description: "ใช้งานได้ทั้งคอมพิวเตอร์ แท็บเล็ต และสมาร์ทโฟน"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "ข้อมูลสำรองอัตโนมัติ",
      description: "ระบบสำรองข้อมูลอัตโนมัติ ไม่ต้องกังวลเรื่องข้อมูลสูญหาย"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#06072C] via-[#2F36C9] to-[#06072C]">
      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-white font-bold text-xl">TechSoft Solutions</div>
              <div className="hidden md:flex space-x-8 text-white/90">
                <a href="#services" className="hover:text-white transition-colors">บริการ</a>
                <a href="#why-us" className="hover:text-white transition-colors">ทำไมเลือกเรา</a>
                <a href="#pricing" className="hover:text-white transition-colors">ราคา</a>
                <a href="#testimonials" className="hover:text-white transition-colors">รีวิว</a>
                <a href="#contact" className="hover:text-white transition-colors">ติดต่อ</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-12 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              โซลูชั่นซอฟต์แวร์
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                สำหรับธุรกิจของคุณ
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              ผู้เชี่ยวชาญด้านระบบ POS, จัดการโรงแรม, ที่พัก และคลังสินค้า 
              พร้อมให้บริการครบครันสำหรับธุรกิจทุกขนาด
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#2F36C9] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105">
                เริ่มต้นใช้งาน
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                ดูข้อมูลเพิ่มเติม
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
                <div className="text-white mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">บริการของเรา</h2>
            <p className="text-xl text-white/70">ซอฟต์แวร์คุณภาพสูงสำหรับทุกประเภทธุรกิจ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setActiveService(index)}
              >
                <div className="text-white mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/80">
                      <Check className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Detailed Service View */}
          <div className="mt-16 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
            <div className="text-center mb-8">
              <div className="text-white mb-4 flex justify-center">{services[activeService].icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4">{services[activeService].title}</h3>
              <p className="text-xl text-white/70">{services[activeService].description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services[activeService].detailedFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4">
                  <div className="flex items-start">
                    <Check className="w-5 h-5 mr-3 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ทำไมต้องเลือกเรา</h2>
            <p className="text-xl text-white/70">เหตุผลที่ลูกค้ากว่า 500+ รายไว้วางใจเรา</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-white mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">แพ็กเกจราคา</h2>
            <p className="text-xl text-white/70 mb-4">เลือกแพ็กเกจที่เหมาะสมกับขนาดธุรกิจของคุณ</p>
            <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-3 rounded-full inline-block">
              <Zap className="w-5 h-5 inline mr-2" />
              โปรโมชั่นพิเศษ! ลด 25% สำหรับลูกค้าใหม่
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-xl transition-all ${
                    activeService === index
                      ? 'bg-white text-[#2F36C9]'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(services[activeService].tiers).map(([size, tier], index) => (
                <div
                  key={size}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 relative ${
                    size === 'medium' ? 'transform scale-105 border-white/40' : ''
                  }`}
                >
                  {size === 'medium' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-[#2F36C9] to-white text-white px-4 py-2 rounded-full text-sm flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        แนะนำ
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                      {size === 'small' && <Users className="w-8 h-8 text-white" />}
                      {size === 'medium' && <Building className="w-8 h-8 text-white" />}
                      {size === 'large' && <Crown className="w-8 h-8 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    {tier.originalPrice && (
                      <div className="text-lg text-white/50 line-through mb-1">{tier.originalPrice}</div>
                    )}
                    <div className="text-4xl font-bold text-white mb-2">{tier.price}</div>
                    <p className="text-white/70">รายเดือน</p>
                    {tier.originalPrice && (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm mt-2 inline-block">
                        ประหยัด 25%
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/80">
                        <Check className="w-5 h-5 mr-3 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-white text-[#2F36C9] py-3 rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:scale-105">
                    เลือกแพ็กเกจ
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
              <Wifi className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Cloud-Based</h3>
              <p className="text-white/70">เข้าถึงได้ทุกที่ทุกเวลา</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
              <Globe className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Multi-Language</h3>
              <p className="text-white/70">รองรับภาษาไทยและอังกฤษ</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-center">
              <BarChart3 className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Real-time Reports</h3>
              <p className="text-white/70">รายงานแบบเรียลไทม์</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ลูกค้าพูดถึงเรา</h2>
            <p className="text-xl text-white/70">ความคิดเห็นจากลูกค้าที่ใช้บริการจริง</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-white/70 text-sm">{testimonial.position}</p>
                    <p className="text-white/60 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-white/80 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ติดต่อเรา</h2>
            <p className="text-xl text-white/70">พร้อมให้คำปรึกษาและสนับสนุนคุณตลอด 24 ชั่วโมง</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-8">ข้อมูลติดต่อ</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-4 rounded-xl mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70">โทรศัพท์</p>
                    <p className="text-white text-lg">02-123-4567</p>
                    <p className="text-white text-lg">089-123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-white/20 p-4 rounded-xl mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70">อีเมล</p>
                    <p className="text-white text-lg">info@techsoft.co.th</p>
                    <p className="text-white text-lg">support@techsoft.co.th</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-white/20 p-4 rounded-xl mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70">ที่อยู่</p>
                    <p className="text-white text-lg">123 ถนนเทคโนโลยี แขวงนวัตกรรม<br />เขตอนาคต กรุงเทพฯ 10110</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-white/20 p-4 rounded-xl mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70">เวลาทำการ</p>
                    <p className="text-white text-lg">จันทร์-ศุกร์: 9:00-18:00</p>
                    <p className="text-white text-lg">เสาร์-อาทิตย์: 9:00-17:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="text-white font-bold mb-4">ช่องทางอื่นๆ</h4>
                <div className="flex space-x-4">
                  <div className="bg-green-500 p-3 rounded-xl">
                    <span className="text-white font-bold">LINE</span>
                  </div>
                  <div className="bg-blue-500 p-3 rounded-xl">
                    <span className="text-white font-bold">Facebook</span>
                  </div>
                  <div className="bg-red-500 p-3 rounded-xl">
                    <span className="text-white font-bold">YouTube</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-8">ส่งข้อความหาเรา</h3>
              
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="ชื่อ-นามสกุล"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="ชื่อบริษัท/ร้าน"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="อีเมล"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="เบอร์โทรศัพท์"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40">
                    <option value="" className="bg-[#2F36C9] text-white">เลือกบริการที่สนใจ</option>
                    <option value="pos" className="bg-[#2F36C9] text-white">ระบบ POS</option>
                    <option value="hotel" className="bg-[#2F36C9] text-white">จัดการโรงแรม</option>
                    <option value="accommodation" className="bg-[#2F36C9] text-white">จัดการที่พัก</option>
                    <option value="warehouse" className="bg-[#2F36C9] text-white">จัดการคลังสินค้า</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="ข้อความ"
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/40 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-[#2F36C9] py-3 rounded-xl font-semibold hover:bg-white/90 transition-all flex items-center justify-center"
                >
                  ส่งข้อความ
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </form>

              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                <p className="text-green-300 text-sm">
                  <Check className="w-4 h-4 inline mr-2" />
                  เราจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-bold text-2xl mb-4">TechSoft Solutions</div>
              <p className="text-white/70 mb-4">
                ผู้นำด้านซอฟต์แวร์จัดการธุรกิจในประเทศไทย
              </p>
              <div className="flex space-x-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white/20 p-2 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white/20 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">บริการ</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">ระบบ POS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">จัดการโรงแรม</a></li>
                <li><a href="#" className="hover:text-white transition-colors">จัดการที่พัก</a></li>
                <li><a href="#" className="hover:text-white transition-colors">จัดการคลังสินค้า</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">บริษัท</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">เกี่ยวกับเรา</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ทีมงาน</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ข่าวสาร</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ร่วมงานกับเรา</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">สนับสนุน</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">คู่มือการใช้งาน</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ติดต่อสนับสนุน</a></li>
                <li><a href="#" className="hover:text-white transition-colors">อัพเดท</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 mb-4 md:mb-0">
                © 2025 TechSoft Solutions. All rights reserved.
              </div>
              <div className="flex space-x-6 text-white/60">
                <a href="#" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
                <a href="#" className="hover:text-white transition-colors">เงื่อนไขการใช้งาน</a>
                <a href="#" className="hover:text-white transition-colors">คุกกี้</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;