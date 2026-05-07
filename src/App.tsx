/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  Wrench,
  Zap,
  Droplets,
  HardHat,
  Clock,
  Phone,
  ShieldCheck,
  Star,
  ChevronRight,
  MessageCircle,
  PhoneCall,
  Activity,
  CheckCircle2
} from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const WHATSAPP_NUMBER = "5554996224098";
  const wppLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Preciso%20de%20atendimento%20emergencial.`;
  const getServiceWppLink = (serviceName: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para o serviço de ${serviceName}.`)}`;

  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-neon selection:text-brand-dark overflow-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-brand-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-brand-primary to-brand-neon flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              <Zap size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <div className="font-display font-bold text-lg sm:text-xl tracking-tight text-white flex flex-col leading-none">
              <span>CR Serviços</span>
              <span className="text-brand-neon text-xs sm:text-sm font-medium">Gerais</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicos" className="hover:text-brand-neon transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-brand-neon transition-colors">Diferenciais</a>
            <div className="flex items-center gap-2 text-brand-neon">
              <Clock size={16} />
              <span>Plantão 24h</span>
            </div>
          </div>

          <a 
            href={wppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-4 sm:px-6 py-2 sm:py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] text-sm sm:text-base"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <MessageCircle size={18} className="relative z-10" />
            <span className="relative z-10 hidden sm:inline">WhatsApp Agora</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-52 md:pb-32 px-4">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-neon/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Problemas Hidráulicos ou <br className="hidden md:block"/> Elétricos? <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-neon to-brand-primary animate-glow">
                Resolvemos Hoje Mesmo.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              Equipe especializada em encanamento, manutenção e elétrica com atendimento 
              <strong className="text-white font-medium"> rápido, profissional e emergencial</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={wppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-green-500 text-white rounded-lg font-medium text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(29,78,216,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] group"
              >
                <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
                Chamar no WhatsApp
              </a>
              
              <a 
                href="tel:5554996224098"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
              >
                <PhoneCall size={20} />
                Solicitar Atendimento
              </a>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 mt-4 md:mt-8 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-dark bg-slate-800 flex items-center justify-center">
                      <Star size={12} className="text-brand-accent-yellow fill-brand-accent-yellow" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col ml-2">
                  <span className="text-sm font-bold text-white">4.9/5</span>
                  <span className="text-xs text-slate-400">+500 clientes</span>
                </div>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 size={16} className="text-brand-neon" />
                <span>Chegada em até 40 min</span>
              </div>
            </div>
          </motion.div>

          <div className="relative lg:ml-auto w-full max-w-lg">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,102,255,0.2)] border border-brand-neon/20 group z-10"
            >
              {/* Dark CSS overlay for cinematic effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-10" />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,102,255,0.4)] z-10 pointers-events-none mix-blend-overlay" />
              
              {/* Professional Image Placeholder sourced from Unsplash (construction/electrician theme) */}
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492d00cd9?q=80&w=2669&auto=format&fit=crop" 
                alt="Profissional Uniformizado" 
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Floating Card 1: Hidráulica */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -right-2 sm:-right-4 top-1/4 z-20 bg-brand-dark/80 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl shadow-2xl flex items-center gap-3 sm:gap-4 animate-float"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <Droplets size={20} className="text-blue-400 sm:w-6 sm:h-6" />
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-bold font-display leading-tight">Hidráulica</p>
                <p className="text-slate-400 text-xs">Vazamentos e Rede</p>
              </div>
            </motion.div>

            {/* Floating Card 2: Elétrica */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-2 sm:-left-6 bottom-1/3 z-20 bg-brand-dark/80 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl shadow-2xl flex items-center gap-3 sm:gap-4 animate-float-delayed"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
                <Zap size={20} className="text-brand-accent-yellow sm:w-6 sm:h-6" />
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-bold font-display leading-tight">Elétrica</p>
                <p className="text-slate-400 text-xs">Reparos e Instalação</p>
              </div>
            </motion.div>

            {/* Floating Badge: Emergência */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-4 sm:-bottom-8 right-0 sm:right-8 z-20 bg-gradient-to-r from-brand-accent-red to-red-600 p-3 sm:p-4 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.5)] border border-red-400/30 flex items-center gap-3 sm:gap-4 animate-float-slow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Clock size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-white font-bold font-display leading-tight text-base sm:text-lg">Emergência 24h</p>
                <p className="text-red-100 text-xs sm:text-sm font-medium">Equipe em 40 min</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Marquee Divider - 24/7 Urgency Banner */}
      <div className="bg-brand-accent-red py-4 relative overflow-hidden flex items-center rotate-1 scale-110 z-30 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* We repeat the content to create a seamless infinite loop */}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-6 text-white font-display font-bold tracking-widest uppercase">
              <span>Atendimento Emergencial 24 Horas</span>
              <span className="text-red-200 ml-2">•</span>
              <span>Equipes de Prontidão Hoje</span>
              <span className="text-red-200 ml-2">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Grid Section */}
      <section id="servicos" className="py-24 px-4 bg-black/40 border-y border-white/5 relative mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Nossas Especialidades
            </h2>
            <p className="text-slate-400 text-lg">
              Oferecemos um portfólio completo de soluções residenciais e comerciais, 
              sempre com extrema qualidade e segurança.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hidráulica",
                desc: "Manutenção de bombas, caixas d'água, válvulas e sistemas complexos de distribuição.",
                icon: <Droplets size={32} />
              },
              {
                title: "Encanador",
                desc: "Vazamentos, troca de tubulações, instalação de torneiras e reparos hidráulicos em geral.",
                icon: <Wrench size={32} />
              },
              {
                title: "Desentupimento",
                desc: "Desobstrução rápida e limpa de pias, ralos, vasos sanitários e redes de esgoto.",
                icon: <Activity size={32} />
              },
              {
                title: "Eletricista",
                desc: "Reparos em quadros, curtos-circuitos, instalação de chuveiros, tomadas e projetos elétricos completos.",
                icon: <Zap size={32} />
              },
              {
                title: "Manutenção Geral",
                desc: "Pequenos reparos, instalações de suportes, ventiladores e serviços preventivos.",
                icon: <HardHat size={32} />
              },
              {
                title: "Atendimento Emergencial",
                desc: "Panes elétricas e vazamentos graves. Nossa equipe chega rápido a qualquer hora.",
                icon: <Clock size={32} />,
                highlight: true
              }
            ].map((service, idx) => (
              <div 
                key={idx} 
                className={`group relative p-8 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  service.highlight 
                    ? "bg-brand-accent-red/10 border-brand-accent-red/30 hover:border-brand-accent-red hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                    : "bg-white/5 border-white/10 hover:border-brand-neon/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]"
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  service.highlight ? "bg-brand-accent-red text-white" : "bg-white/10 text-brand-neon group-hover:bg-brand-neon group-hover:text-brand-dark"
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
                
                <a href={getServiceWppLink(service.title)} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 font-medium text-sm transition-colors ${
                  service.highlight ? "text-brand-accent-red hover:text-white" : "text-slate-300 group-hover:text-brand-neon"
                }`}>
                  Solicitar orçamento <ChevronRight size={16} />
                </a>
                
                {/* Hover Glow Effect */}
                <div className="absolute top-0 right-0 p-32 bg-brand-neon/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trabalhos Feitos / Portfolio Section */}
      <section className="py-20 overflow-hidden bg-black/60 border-b border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-primary/5 blur-[120px] pointer-events-none" />
        
        <div className="mb-12 text-center max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Trabalhos Realizados
          </h2>
          <p className="text-slate-400 text-lg">
            Confira alguns dos nossos projetos e reparos executados com excelência.
          </p>
        </div>

        {/* Carousel Row 1 */}
        <div className="flex whitespace-nowrap animate-marquee-slow hover:[animation-play-state:paused] mb-6 relative z-10">
          {[...Array(2)].map((_, groupIdx) => (
            <div key={`row1-${groupIdx}`} className="flex items-center gap-6 px-3">
              <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=800&auto=format&fit=crop" alt="Eletricista de Cinto" className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-xl border border-white/10" />
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop" alt="Trabalho Hidráulico" className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-xl border border-white/10" />
              <img src="https://images.unsplash.com/photo-1540340061722-9293d5163008?q=80&w=800&auto=format&fit=crop" alt="Ferramentas Manutenção" className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-xl border border-white/10" />
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" alt="Quadro Elétrico" className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-xl border border-white/10" />
            </div>
          ))}
        </div>

        {/* Carousel Row 2 */}
        <div className="flex whitespace-nowrap animate-marquee-reverse hover:[animation-play-state:paused] relative z-10">
          {[...Array(2)].map((_, groupIdx) => (
            <div key={`row2-${groupIdx}`} className="flex items-center gap-6 px-3">
              <img src="https://images.unsplash.com/photo-1605810731057-013fa096aaef?q=80&w=800&auto=format&fit=crop" alt="Reparo Placa" className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-xl border border-white/10" />
              <img src="https://images.unsplash.com/photo-1621905252472-83e878563c63?q=80&w=800&auto=format&fit=crop" alt="Instalação Comercial" className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-xl border border-white/10" />
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop" alt="Verificação Tensão" className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-xl border border-white/10" />
              <img src="https://images.unsplash.com/photo-1416879590524-7f85a210b395?q=80&w=800&auto=format&fit=crop" alt="Bancada Equipamentos" className="w-72 md:w-96 aspect-video object-cover rounded-2xl shadow-xl border border-white/10" />
            </div>
          ))}
        </div>
      </section>

      {/* Differentials / Why Choose Us */}
      <section id="diferenciais" className="py-16 md:py-24 px-4 relative overflow-hidden">
        {/* Wireframe background elements */}
        <div className="absolute -left-64 top-0 w-[500px] h-[500px] border border-white/5 rounded-full" />
        <div className="absolute -left-32 top-32 w-[500px] h-[500px] border border-white/5 rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Por que escolher a <br className="hidden md:block"/>
              <span className="text-brand-neon">CR Serviços Gerais?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-lg">
              Não entregamos apenas serviços, entregamos segurança para sua família e para o seu negócio. 
              Garantia registrada e suporte contínuo.
            </p>

            <div className="space-y-6">
              {[
                { title: "Atendimento Rápido", sub: "Equipes posicionadas estrategicamente." },
                { title: "Profissionais Capacitados", sub: "Técnicos uniformizados e identificados." },
                { title: "Serviço Garantido", sub: "Garantia em contrato para sua segurança." },
                { title: "Residencial e Comercial", sub: "Estrutura para projetos de qualquer porte." },
                { title: "Equipamentos de Ponta", sub: "Tecnologia para diagnósticos precisos." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-brand-neon/20 border border-brand-neon/50 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} className="text-brand-neon" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-400">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/30 blur-[50px] rounded-full pointer-events-none" />
            
            <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">Precisa de ajuda agora?</h3>
            
            <div className="space-y-4 flex flex-col items-center">
              <a 
                href={wppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-md px-6 py-5 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                Chamar no WhatsApp
              </a>
              
              <a 
                href="tel:5554996224098"
                className="w-full max-w-md px-6 py-5 bg-brand-primary hover:bg-blue-600 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-1"
              >
                <Phone size={24} />
                Ligar Agora (24h)
              </a>

              <p className="text-slate-400 mt-6 text-center text-sm">
                Orçamento gratuito pelo WhatsApp.<br/> Resposta imediata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded shrink-0 bg-brand-primary flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">CR Serviços Gerais</span>
            </div>
            <p className="text-slate-400 max-w-xs">
              Sua equipe de confiança para manutenções elétricas e hidráulicas. Atendimento premium e garantia de qualidade.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Links Rápidos</h4>
            <div className="flex flex-col gap-3 text-slate-400">
              <a href="#servicos" className="hover:text-brand-neon transition-colors w-fit">Nossos Serviços</a>
              <a href="#diferenciais" className="hover:text-brand-neon transition-colors w-fit">Por que nos escolher?</a>
              <a href={wppLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-neon transition-colors w-fit">Solicitar Orçamento</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Contato 24 Horas</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MessageCircle size={18} className="text-[#25D366]" />
                <a href={wppLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">(54) 99622-4098</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={18} className="text-brand-primary" />
                <a href="tel:5554996224098" className="hover:text-white transition-colors">(54) 99622-4098</a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 mt-2 p-3 bg-white/5 rounded-lg border border-white/5 w-fit">
                <Clock size={18} className="text-brand-neon" />
                <span>Atendimento 24h / 7 dias</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} CR Serviços Gerais. Todos os direitos reservados.</p>
          <p>Feito para alta performance e conversão.</p>
        </div>
      </footer>
    </div>
  );
}

