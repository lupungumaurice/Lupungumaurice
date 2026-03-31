import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, Facebook, Instagram, Smartphone, ShieldCheck, Zap, Clock, ChevronDown, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Display' | 'Accessoire';
}

interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'frp',
    title: 'Déblocage FRP',
    description: 'Suppression du compte Google après réinitialisation.',
    price: 'À partir de 15$',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: 'accounts',
    title: 'Récupération de Comptes',
    description: 'Récupération de vos accès iCloud, Samsung, ou Google.',
    price: 'À partir de 20$',
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    id: 'screen',
    title: 'Réparation Écran',
    description: 'Remplacement d\'écrans cassés par des displays originaux.',
    price: 'Selon modèle',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 'battery',
    title: 'Changement Batterie',
    description: 'Installation de batteries neuves haute performance.',
    price: 'À partir de 10$',
    icon: <Clock className="w-6 h-6" />,
  },
];

const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Display iPhone 13 Pro Max',
    description: 'Original OLED Display, qualité premium.',
    price: '180$',
    image: 'https://picsum.photos/seed/iphone-display/400/400',
    category: 'Display',
  },
  {
    id: 'p2',
    name: 'Écran Samsung S22 Ultra',
    description: 'Afficheur original avec châssis.',
    price: '220$',
    image: 'https://picsum.photos/seed/samsung-display/400/400',
    category: 'Display',
  },
  {
    id: 'p3',
    name: 'Chargeur Rapide 45W',
    description: 'Compatible Samsung et iPhone, USB-C.',
    price: '25$',
    image: 'https://picsum.photos/seed/charger/400/400',
    category: 'Accessoire',
  },
  {
    id: 'p4',
    name: 'Écouteurs Bluetooth Pro',
    description: 'Réduction de bruit active, son HD.',
    price: '45$',
    image: 'https://picsum.photos/seed/earbuds/400/400',
    category: 'Accessoire',
  },
];

const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Jean-Pierre K.', comment: 'Service ultra rapide pour mon déblocage FRP. Je recommande LM Phone !', rating: 5 },
  { id: 't2', name: 'Sarah M.', comment: 'Écran remplacé en 30 minutes, mon téléphone est comme neuf.', rating: 5 },
  { id: 't3', name: 'Marc L.', comment: 'Accessoires de qualité et prix très compétitifs.', rating: 4 },
];

const FAQS = [
  { q: "Combien de temps prend une réparation d'écran ?", a: "En moyenne, entre 30 et 60 minutes selon le modèle." },
  { q: "Est-ce que vous offrez une garantie ?", a: "Oui, toutes nos réparations et pièces sont garanties 3 mois." },
  { q: "Faites-vous le déblocage à distance ?", a: "Certains services de déblocage peuvent être faits à distance, contactez-nous sur WhatsApp." },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">LM</div>
        <span className={cn("font-bold text-xl tracking-tight", isScrolled ? "text-slate-900" : "text-white")}>Phone</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {['Accueil', 'Services', 'Produits', 'À propos', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className={cn(
              "text-sm font-medium hover:text-blue-600 transition-colors",
              isScrolled ? "text-slate-600" : "text-white/90"
            )}
          >
            {item}
          </a>
        ))}
      </div>
      <a 
        href="https://wa.me/243989924394" 
        target="_blank"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
      >
        WhatsApp
      </a>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("text-3xl md:text-4xl font-bold mb-4", light ? "text-white" : "text-slate-900")}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn("max-w-2xl mx-auto text-lg", light ? "text-white/70" : "text-slate-600")}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070" 
            alt="Phone Repair" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm text-blue-400 text-sm font-medium"
          >
            Expert en Réparation & Déblocage
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
          >
            LM Phone : Votre Mobile, <span className="text-blue-500">Notre Priorité.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Déblocage FRP, récupération de comptes, réparation d'écrans et vente d'accessoires premium. Rapidité, fiabilité et satisfaction garantie.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#services" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20">
              Nos Services
            </a>
            <a href="#produits" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Boutique Accessoires
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <SectionHeading 
          title="Nos Services Experts" 
          subtitle="Nous redonnons vie à votre smartphone avec des solutions techniques avancées et des pièces de qualité."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-blue-600">{service.price}</span>
                <a href={`https://wa.me/243989924394?text=Je souhaite réserver pour : ${service.title}`} target="_blank" className="text-sm font-bold flex items-center gap-1 text-slate-900 hover:text-blue-600 transition-colors">
                  Réserver <CheckCircle2 className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="produits" className="py-24 px-6 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Boutique & Displays" 
            subtitle="Des pièces de rechange originales et des accessoires sélectionnés pour leur durabilité."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-600 shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-slate-900">{product.price}</span>
                    <button className="bg-slate-900 hover:bg-blue-600 text-white p-3 rounded-xl transition-colors shadow-md">
                      <Smartphone className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-blue-600 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-600/30">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Paiement Sécurisé & Livraison</h3>
              <p className="text-blue-100">Nous acceptons les paiements via Mobile Money et espèces en boutique.</p>
            </div>
            <a href="https://wa.me/243989924394" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
              Commander maintenant
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="à-propos" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 tracking-tight">L'histoire de <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">LM Phone</span></h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Fondée avec la passion de la technologie, LM Phone est devenue une référence à Kinshasa pour la réparation et le déblocage de smartphones. Notre mission est simple : offrir un service technique de haute précision accessible à tous.
              </p>
              <p>
                Nous croyons que chaque téléphone mérite une seconde chance. C'est pourquoi nous investissons dans les meilleurs outils de diagnostic et de déblocage (FRP, comptes, réseaux) pour garantir un résultat impeccable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-blue-600 font-bold text-2xl mb-1">100%</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Fiabilité</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-blue-600 font-bold text-2xl mb-1">30min</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Rapidité</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-blue-600 font-bold text-2xl mb-1">5k+</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Clients</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=1000" 
                alt="Workshop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold">Satisfaction Client</div>
                  <div className="text-sm text-slate-500">Notre priorité absolue</div>
                </div>
              </div>
              <div className="text-slate-600 text-sm italic">"Un service irréprochable et transparent."</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Ce que disent nos clients" light />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Zap key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{t.comment}"</p>
                <div className="font-bold text-lg">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <SectionHeading title="Questions Fréquentes" />
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <summary className="p-6 cursor-pointer flex items-center justify-between font-bold text-lg list-none">
                {faq.q}
                <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform text-slate-400" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">Contactez-nous</h2>
              <p className="text-lg text-slate-600 mb-12">Besoin d'un devis ou d'une assistance rapide ? Notre équipe est à votre écoute.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Téléphone</div>
                    <a href="tel:+243810155525" className="text-slate-600 hover:text-blue-600 transition-colors">+243 810 155 525</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Email</div>
                    <a href="mailto:lupungumaurice2@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">lupungumaurice2@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">WhatsApp</div>
                    <a href="https://wa.me/243989924394" className="text-slate-600 hover:text-blue-600 transition-colors">+243 989 924 394</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4">
                {[
                  { icon: <Facebook />, label: 'Facebook', url: '#' },
                  { icon: <Instagram />, label: 'Instagram', url: '#' },
                  { icon: <Send />, label: 'Telegram', url: '#' },
                  { icon: <MessageSquare />, label: 'TikTok', url: '#' },
                ].map((social) => (
                  <a 
                    key={social.label} 
                    href={social.url} 
                    className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner">
              <h3 className="text-2xl font-bold mb-8">Envoyez un message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Nom</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Votre nom" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Téléphone</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Ex: +243..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                  <textarea className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[150px]" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 transition-all">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">LM</div>
            <span className="font-bold text-lg tracking-tight">Phone</span>
          </div>
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} LM Phone. Tous droits réservés.
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/243989924394" 
        target="_blank"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Assistance Rapide
        </span>
      </a>
    </div>
  );
}
