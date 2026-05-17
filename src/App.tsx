/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Camera, 
  MessageSquare, 
  Utensils, 
  Dumbbell, 
  Droplets, 
  CheckCircle2, 
  Star, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Trophy,
  Plus,
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import React, { useState } from "react";

const paymentLink = "https://pay.kiwify.com.br/TPO8iN9";

// Custom UI Components matching the app's style
const AppCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 ${className}`}>
    {children}
  </div>
);

const FeatureButton = ({ icon: Icon, title, subtitle, color, onClick }: any) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`w-full flex items-center justify-between p-6 rounded-[2rem] text-white shadow-lg overflow-hidden relative group ${color}`}
  >
    <div className="flex items-center gap-5 z-10">
      <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-left">
        <h3 className="font-bold text-xl leading-tight uppercase italic">{title}</h3>
        <p className="text-white/80 text-sm">{subtitle}</p>
      </div>
    </div>
    <ChevronRight className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity z-10" />
    <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12" />
  </motion.button>
);

const GridIconCard = ({ icon: Icon, title, subtitle, iconColor }: any) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 flex flex-col items-center text-center gap-3"
  >
    <div className={`${iconColor} p-4 rounded-2xl bg-opacity-10`}>
      <Icon className="w-8 h-8" />
    </div>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-gray-400 text-xs">{subtitle}</p>
    </div>
  </motion.div>
);

export default function App() {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFBFF] text-gray-900 font-sans selection:bg-[#10B981] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black bg-gradient-to-r from-[#10B981] to-[#0EA5E9] bg-clip-text text-transparent italic">
              LEANFIT
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#benefits" className="text-gray-600 font-medium hover:text-[#10B981] transition-colors">Benefícios</a>
            <a href="#faq" className="text-gray-600 font-medium hover:text-[#10B981] transition-colors">FAQ</a>
            <button 
              onClick={scrollToOffer}
              className="bg-[#10B981] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-emerald-200 hover:scale-105 active:scale-95 transition-all"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-50 text-[#10B981] px-4 py-2 rounded-full font-bold text-sm mb-6"
          >
            <Zap className="w-4 h-4 fill-emerald-500" />
            <span>O SEU NUTRICIONISTA PESSOAL COM IA</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black italic tracking-tight text-gray-900 leading-[1.1] mb-8"
          >
            TRANSFORME SEU CORPO EM <br />
            <span className="bg-gradient-to-r from-[#10B981] to-[#0EA5E9] bg-clip-text text-transparent">TEMPO RECORDE</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12"
          >
            A tecnologia que você precisava para ter precisão nutricional absoluta, treinos eficientes e o corpo dos seus sonhos. Tudo na palma da sua mão.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={scrollToOffer}
              className="w-full md:w-auto bg-[#10B981] text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl shadow-emerald-200 flex items-center justify-center gap-3 group"
            >
              DESBLOQUEAR ACESSO AGORA
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-gray-400 font-medium flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Garantia de 7 dias
            </p>
          </motion.div>
        </div>
      </section>

      {/* App Visual Identity Preview */}
      <section className="px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square bg-[#10B981]/5 rounded-full blur-[100px] -z-10" />
          
          <AppCard className="max-w-md mx-auto relative z-10 p-4 pb-8">
            <div className="flex items-center justify-between px-4 mb-6">
               <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-medium">Boa noite,</span>
                  <span className="text-lg font-bold text-gray-800">Lean Fit 👋</span>
               </div>
               <div className="w-10 h-10 rounded-full bg-[#10B981] flex items-center justify-center text-white font-bold">L</div>
            </div>

            <div className="space-y-4 px-2">
              <div className="bg-[#F8FBFA] p-4 rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-emerald-50 transition-colors border border-emerald-100/50">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#10B981] italic uppercase tracking-wider">Motivação do dia</span>
                    <p className="text-xs text-gray-600 font-medium italic">A cada dia, uma nova chance de recomeçar...</p>
                  </div>
                  <div className="text-[#10B981]"><Star className="w-5 h-5 fill-emerald-100" /></div>
              </div>

              <FeatureButton 
                icon={Camera} 
                title="Analisar Refeição" 
                subtitle="Escaneie sua comida agora" 
                color="bg-[#10B981]"
              />
              
              <FeatureButton 
                icon={MessageSquare} 
                title="Chat IA" 
                subtitle="Tire dúvidas agora" 
                color="bg-[#0EA5E9]"
              />

              <div className="grid grid-cols-2 gap-4">
                <GridIconCard icon={Utensils} title="Dieta" subtitle="Planos personalizados" iconColor="text-emerald-500" />
                <GridIconCard icon={ArrowRight} title="Receitas" subtitle="Deliciosas e saudáveis" iconColor="text-orange-500" />
                <GridIconCard icon={Dumbbell} title="Treinos" subtitle="Exercícios para você" iconColor="text-cyan-500" />
                <GridIconCard icon={Zap} title="Desafios" subtitle="Supere seus limites" iconColor="text-indigo-500" />
              </div>
            </div>
          </AppCard>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black italic mb-6">O QUE VOCÊ VAI <span className="text-[#10B981]">RECEBER</span></h2>
            <p className="text-gray-500 text-lg">Tudo o que você precisa para uma transformação real.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <BenefitItem 
              icon={Camera}
              title="Scanner IA"
              description="Nossa IA identifica os alimentos e fornece uma análise completa de macros e calorias instantaneamente."
              color="bg-emerald-500"
            />
            <BenefitItem 
              icon={Target}
              title="Planos Customizados"
              description="Dietas e treinos montados especificamente para o seu objetivo, seja ele emagrecer ou ganhar massa."
              color="bg-blue-500"
            />
            <BenefitItem 
              icon={MessageSquare}
              title="Suporte IA"
              description="Dúvida sobre um alimento? Pergunte ao nosso Chat IA e receba respostas baseadas em ciência na hora."
              color="bg-cyan-500"
            />
            <BenefitItem 
              icon={Droplets}
              title="Hidratação"
              description="Monitor inteligente de água para garantir que seu metabolismo esteja sempre funcionando no máximo."
              color="bg-sky-500"
            />
            <BenefitItem 
              icon={Trophy}
              title="Conquistas"
              description="Ganhe conquistas, suba de nível e mantenha a motivação alta todos os dias com desafios práticos."
              color="bg-orange-500"
            />
            <BenefitItem 
              icon={ShieldCheck}
              title="Lista de Compras"
              description="Organização completa para você nunca mais se perder no supermercado e focar no que importa."
              color="bg-indigo-500"
            />
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black italic mb-20 italic underline decoration-[#10B981] underline-offset-8">QUEM USA, RECOMENDA</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialItem 
              name="Felipe Costa" 
              role="Empresário" 
              text="O escaneamento de refeições mudou meu jogo. Nunca foi tão fácil bater os macros."
            />
            <TestimonialItem 
              name="Mariana Santos" 
              role="Atleta" 
              text="A precisão da IA me impressionou. É como ter um nutricionista no meu bolso 24h."
            />
            <TestimonialItem 
              name="Carlos Alberto" 
              role="Pai de família" 
              text="Finalmente um app que entende minha rotina corrida e me entrega o que preciso."
            />
          </div>
        </div>
      </section>

      {/* Best Offer Section */}
      <section id="offer" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#10B981]/10 to-transparent -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <AppCard className="relative overflow-hidden border-2 border-[#10B981] p-0">
             <div className="bg-[#10B981] p-8 text-white text-center">
                <h3 className="text-3xl font-black italic italic mb-2 italic">OFERTA ESPECIAL LIMITADA</h3>
                <p className="font-medium opacity-90 italic">Comece hoje sua jornada no LeanFit VIP</p>
             </div>
             
             <div className="p-8 md:p-12">
               <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
                 <div className="space-y-6 flex-1">
                    <OfferItem text="Acesso Vitalício ao App" />
                    <OfferItem text="Scanner de Refeições IA Ilimitado" />
                    <OfferItem text="Chat Nutricional Direto" />
                    <OfferItem text="Planos de Treino Exclusivos" />
                 </div>
                 
                 <div className="text-center md:text-right">
                    <span className="text-gray-400 line-through text-2xl font-bold">R$ 97,00</span>
                    <div className="flex flex-col">
                      <span className="text-gray-900 font-medium">Apenas 1x de</span>
                      <span className="text-7xl font-black text-[#10B981] leading-none mb-2">R$ 27,90</span>
                      <span className="text-gray-500 font-bold italic uppercase tracking-tighter">Oferta exclusiva por tempo limitado</span>
                    </div>
                 </div>
               </div>

               <motion.a
                href={paymentLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#10B981] text-white flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 py-6 sm:py-8 px-4 rounded-full font-black text-xl sm:text-2xl shadow-xl shadow-emerald-200 uppercase tracking-tight group text-center"
               >
                 <span>EU QUERO MINHA TRANSFORMAÇÃO</span>
                 <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8 group-hover:translate-x-2 transition-transform shrink-0" />
               </motion.a>
               
               <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-60">
                 <img src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-11.png" className="h-6 object-contain grayscale" alt="Visa" />
                 <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" className="h-8 object-contain grayscale" alt="Mastercard" />
                 <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo-1.png" className="h-6 object-contain grayscale" alt="Pix" />
               </div>
             </div>
          </AppCard>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black italic text-center mb-20 italic">DÚVIDAS <span className="text-[#10B981]">FREQUENTES</span></h2>
          <div className="space-y-6">
            <FaqItem question="O acesso é vitalício?" answer="Sim! Pagando apenas R$ 27,90, você terá acesso completo a todas as funcionalidades atuais e futuras sem mensalidades." />
            <FaqItem question="Como recebo o acesso?" answer="Imediatamente após a confirmação do pagamento, você receberá o seu login e instruções de acesso direto no seu e-mail." />
            <FaqItem question="Funciona para iniciantes?" answer="Com certeza. O app foi desenhado para ser intuitivo e guiar quem está começando do zero até os níveis mais avançados." />
            <FaqItem question="A IA é confiável?" answer="Sim, nossa IA foi treinada com as melhores bases de dados nutricionais do mercado para garantir precisão máxima nos cálculos." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-3xl font-black italic bg-gradient-to-r from-[#10B981] to-[#0EA5E9] bg-clip-text text-transparent italic">LEANFIT</span>
            <p className="text-gray-400 text-sm">© 2024 LeanFit Technology. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex gap-8 text-gray-500 font-medium">
            <a href="#" className="hover:text-[#10B981]">Termos de Uso</a>
            <a href="#" className="hover:text-[#10B981]">Privacidade</a>
            <a href="#" className="hover:text-[#10B981]">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const BenefitItem = ({ icon: Icon, title, description, color }: any) => (
  <AppCard className="text-left flex flex-col h-full gap-6 group hover:border-emerald-200 transition-all duration-500">
    <div className={`${color} w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform shrink-0`}>
      <Icon className="w-8 h-8" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed italic">{description}</p>
    </div>
  </AppCard>
);


const TestimonialItem = ({ name, role, text }: any) => (
  <AppCard className="text-center italic">
    <div className="flex justify-center gap-1 mb-6">
      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
    </div>
    <p className="text-gray-700 italic text-lg mb-8 leading-relaxed">"{text}"</p>
    <div>
      <h4 className="font-bold text-gray-900">{name}</h4>
      <span className="text-gray-400 text-sm">{role}</span>
    </div>
  </AppCard>
);

const OfferItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4">
    <div className="bg-[#10B981]/10 p-1 rounded-full">
      <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
    </div>
    <span className="text-gray-800 font-bold italic text-lg tracking-tight">{text}</span>
  </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-[1.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left"
      >
        <span className="font-bold text-lg text-gray-800 italic">{question}</span>
        <Plus className={`w-6 h-6 text-[#10B981] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
      <motion.div 
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="px-8 overflow-hidden"
      >
        <p className="pb-8 text-gray-500 italic leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};
