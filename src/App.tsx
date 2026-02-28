import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ShoppingBag, Leaf } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-purple-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-stone-50/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-purple-600" />
            <span className="font-semibold text-xl tracking-tight text-stone-900">Danrick's Store</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
            <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
            <a href="#products" className="hover:text-purple-600 transition-colors">Products</a>
            <a href="#location" className="hover:text-purple-600 transition-colors">Location</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Fresh from Nagcarlan
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight">
            Premium Taro & <br/> Everyday Essentials
          </h1>
          <p className="text-lg text-stone-600 max-w-lg leading-relaxed">
            Your trusted neighborhood variety store in Barangay Banago. We offer the finest locally-sourced taro and a wide selection of daily necessities.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#location" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-sm shadow-purple-200 hover:shadow-md hover:-translate-y-0.5">
              Visit Store
            </a>
            <a href="#contact" className="bg-white hover:bg-stone-100 text-stone-700 border border-stone-200 px-6 py-3 rounded-xl font-medium transition-all shadow-sm">
              Contact Us
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2064&auto=format&fit=crop" 
              alt="Fresh Taro Roots" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-full text-green-600">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900">100% Organic</p>
              <p className="text-xs text-stone-500">Locally Grown</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features/Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-stone-900 mb-4">What We Offer</h2>
            <p className="text-stone-600">Quality products carefully selected for our community.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-6 h-6" />,
                title: "Fresh Taro",
                desc: "High-quality, locally harvested taro roots perfect for your recipes and businesses.",
                color: "bg-purple-50 text-purple-600"
              },
              {
                icon: <ShoppingBag className="w-6 h-6" />,
                title: "Variety Goods",
                desc: "A wide selection of daily essentials, snacks, and household items.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Local Convenience",
                desc: "Located right in the heart of Brgy. Banago, saving you a trip to the main town.",
                color: "bg-emerald-50 text-emerald-600"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-stone-900 mb-4">Find Us Here</h2>
                <p className="text-stone-600">Visit our store in Barangay Banago, Nagcarlan, Laguna.</p>
              </div>
              <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-md border border-stone-200 bg-stone-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15478.432658485295!2d121.3986445!3d14.133333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5a6f2b4b4b4b%3A0x4b4b4b4b4b4b4b4b!2sBanago%2C%20Nagcarlan%2C%20Laguna%2C%20Philippines!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Danrick's Store Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              id="contact"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-100"
            >
              <h3 className="text-2xl font-bold text-stone-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Store Address</h4>
                    <p className="text-stone-600">Barangay Banago<br/>Nagcarlan, Laguna<br/>Philippines</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Phone Number</h4>
                    <p className="text-stone-600">+63 (XXX) XXX-XXXX</p>
                    <p className="text-sm text-stone-500 mt-1">Available during store hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Store Hours</h4>
                    <p className="text-stone-600">Monday - Sunday<br/>6:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900 mb-1">Email Address</h4>
                    <p className="text-stone-600">hello@danricks.placeholder.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-white mb-4">
            <Leaf className="w-5 h-5 text-purple-400" />
            <span className="font-semibold text-lg tracking-tight">Danrick's Store</span>
          </div>
          <p className="max-w-md text-sm">
            Providing fresh taro and daily essentials to the community of Barangay Banago, Nagcarlan, Laguna.
          </p>
          <div className="w-12 h-px bg-stone-800 my-4"></div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Danrick's Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
