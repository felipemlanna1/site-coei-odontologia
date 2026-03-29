import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Tooth, WhatsappLogo, Phone, MapPin, Clock, Star,
  InstagramLogo, FacebookLogo, List, X, ArrowRight,
  ShieldCheck, Sparkle, Baby, Syringe, Eyeglasses,
  FirstAid, CalendarCheck, ChatCircleDots, CaretDown,
  CaretUp, Scales, HandHeart, Stethoscope, UserCircle
} from '@phosphor-icons/react'

const WA = 'https://wa.me/5548996164087?text=Olá! Gostaria de agendar uma consulta na COEI.'
const PHONE_NUM = 'tel:+554840420384'
const IG = 'https://instagram.com/coeiodontologia'
const DOC = 'https://www.doctoralia.com.br/clinicas/coei-odontologia'
const ADDR = 'Av. Pref. Osmar Cunha, 183, Bloco C, Sala 302 — Centro, Florianópolis - SC'
const MAPS = 'https://maps.google.com/?q=COEI+Odontologia+Florianópolis'

function Section({ children, className = '', id }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id={id} ref={ref} className={className}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
        {children}
      </motion.div>
    </section>
  )
}

const especialidades = [
  { icon: Tooth, nome: 'Ortodontia', desc: 'Aparelhos fixos, móveis e alinhadores para um sorriso perfeitamente alinhado. Tratamento personalizado com tecnologia digital.' },
  { icon: Baby, nome: 'Odontopediatria', desc: 'Cuidado especializado e carinhoso para os sorrisos mais jovens. Ambiente acolhedor para crianças de todas as idades.' },
  { icon: Syringe, nome: 'Implantodontia', desc: 'Implantes de titânio com planejamento digital para substituição segura e duradoura de dentes perdidos.' },
  { icon: FirstAid, nome: 'Cirurgia Oral', desc: 'Procedimentos cirúrgicos realizados com precisão e segurança, incluindo extrações e cirurgia ortognática.' },
  { icon: Stethoscope, nome: 'Endodontia', desc: 'Tratamento de canal com tecnologia avançada, garantindo conforto e eficácia. Salvamos seu dente natural.' },
  { icon: Sparkle, nome: 'Estética Dental', desc: 'Clareamento, facetas e lentes de contato dental para um sorriso radiante e natural.' },
  { icon: HandHeart, nome: 'Periodontia', desc: 'Tratamento e prevenção de doenças da gengiva. Saúde periodontal é base para um sorriso saudável.' },
  { icon: Scales, nome: 'Toxina Botulínica', desc: 'Harmonização orofacial com aplicação segura de toxina botulínica para rejuvenescimento facial.' },
]

const depoimentos = [
  { nome: 'Marcos T.', estrelas: 5, texto: 'Profissionais excelentes! Fiz meu tratamento ortodôntico na COEI e o resultado superou todas as expectativas. A equipe é muito atenciosa e competente.' },
  { nome: 'Fernanda S.', estrelas: 5, texto: 'Clínica muito organizada e profissional. O atendimento desde a recepção até a consulta é impecável. Recomendo a todos!' },
  { nome: 'Pedro R.', estrelas: 5, texto: 'Excelente experiência com implante dentário. O Dr. Julio é muito competente e me passou muita segurança durante todo o procedimento.' },
  { nome: 'Juliana M.', estrelas: 5, texto: 'Levo meus filhos na COEI há anos. A equipe de odontopediatria é maravilhosa, as crianças adoram ir ao dentista!' },
]

const duvidas = [
  { p: 'Quais convênios a COEI aceita?', r: 'Atendemos inscritos na OAB/SC e seus dependentes, além de particulares. Também trabalhamos com diversos convênios odontológicos. Entre em contato para verificar o seu.' },
  { p: 'Preciso de encaminhamento para agendar?', r: 'Não! Você pode agendar diretamente pelo WhatsApp ou telefone. Basta entrar em contato e nossa equipe encontrará o melhor horário para você.' },
  { p: 'A clínica atende emergências?', r: 'Sim, atendemos urgências odontológicas durante nosso horário de funcionamento (seg-sex, 8h às 19h). Ligue ou envie mensagem pelo WhatsApp.' },
  { p: 'Quais formas de pagamento são aceitas?', r: 'Aceitamos dinheiro, PIX, cartão de crédito (parcelamento em até 12x) e cartão de débito. Facilitamos ao máximo para você.' },
]

export default function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [faqAberto, setFaqAberto] = useState(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <div className="overflow-x-hidden">
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/95 shadow-xl' : 'bg-navy-950/90'}`} style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#inicio" className="flex items-center gap-3">
              <img src="./images/logo.png" alt="COEI Odontologia" className="h-12 w-auto" />
            </a>
            <div className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-navy-200/80 hover:text-white transition-colors text-sm font-medium">{l.label}</a>
              ))}
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-gold-500/25">
                <WhatsappLogo size={18} weight="duotone" className="flex-shrink-0" />
                Agendar Consulta
              </a>
            </div>
            <button onClick={() => setMenuAberto(!menuAberto)} className="md:hidden text-white p-2" aria-label="Menu">
              {menuAberto ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuAberto && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-navy-950/98 border-t border-navy-800/50">
              <div className="px-4 py-4 space-y-3">
                {links.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setMenuAberto(false)} className="block text-navy-100 hover:text-white py-2 text-lg">{l.label}</a>
                ))}
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold-500 text-navy-950 px-5 py-3 rounded-lg font-bold w-full justify-center mt-2">
                  <WhatsappLogo size={20} weight="duotone" className="flex-shrink-0" />
                  Agendar Consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO — Split layout */}
      <section id="inicio" className="min-h-screen bg-navy-950 pt-20 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-500 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 text-gold-400 px-4 py-1.5 rounded-lg text-sm font-medium mb-6">
                <ShieldCheck size={16} weight="duotone" className="flex-shrink-0" />
                Centro de Especialidades Integradas
              </span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Excelência em{' '}
              <span className="text-gold-500">odontologia integrada</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-navy-200/70 text-lg leading-relaxed mb-8 max-w-lg">
              Múltiplas especialidades em um só lugar no Centro de Florianópolis. Equipe de profissionais altamente qualificados dedicados à saúde e beleza do seu sorriso.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-4 rounded-lg text-lg font-bold transition-all hover:shadow-xl hover:shadow-gold-500/20 animate-pulse-ring">
                <WhatsappLogo size={22} weight="duotone" className="flex-shrink-0" />
                Agendar Consulta
              </a>
              <a href={PHONE_NUM} className="inline-flex items-center justify-center gap-2 border-2 border-navy-600 text-navy-200 hover:bg-navy-800 px-8 py-4 rounded-lg text-lg font-medium transition-all">
                <Phone size={22} weight="duotone" className="flex-shrink-0" />
                (48) 4042-0384
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center gap-6 mt-8 text-navy-300/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" className="text-gold-400" />)}</div>
                <span>4.6 no Google</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ChatCircleDots size={14} weight="duotone" className="flex-shrink-0" />
                55+ avaliações
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-navy-700/30">
              <img src="./images/hero-equipe.png" alt="Equipe COEI Odontologia" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-navy-800 border border-navy-600/50 text-white p-5 rounded-xl shadow-xl">
              <div className="text-3xl font-bold font-[family-name:var(--font-heading)] text-gold-400">8+</div>
              <div className="text-navy-300 text-sm">Especialidades</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BARRA DE CONFIANÇA */}
      <Section className="bg-gold-500 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-navy-950">
            {[
              { v: '8+', l: 'Especialidades' },
              { v: '4.6', l: 'Estrelas Google' },
              { v: '55+', l: 'Avaliações' },
              { v: 'OAB', l: 'Conveniada' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-heading)]">{s.v}</div>
                <div className="text-navy-800/70 text-sm mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SOBRE */}
      <Section id="sobre" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-navy-50 text-navy-700 text-sm font-medium mb-4">
                <Sparkle size={16} weight="duotone" className="flex-shrink-0" />
                Sobre a COEI
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 mb-6">
                Centro Odontológico de Especialidades Integradas
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                A <strong className="text-navy-800">COEI Odontologia</strong> é referência em odontologia integrada no Centro de Florianópolis. Com foco na prevenção e restauração da função e estética do sorriso, oferecemos instalações modernas e técnicas avançadas em todas as áreas da odontologia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nossa equipe multidisciplinar, liderada pelo Dr. Julio Cesar Cavasin Filho, reúne especialistas em Ortodontia, Implantodontia, Cirurgia, Endodontia, Periodontia, Odontopediatria e Estética Dental. Cada paciente recebe um plano de tratamento personalizado e integrado.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Ortodontia', 'Implantodontia', 'Cirurgia', 'Estética', 'Endodontia', 'Periodontia'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-navy-50 text-navy-700 rounded-lg text-sm font-medium">{tag}</span>
                ))}
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg">
                <CalendarCheck size={20} weight="duotone" className="flex-shrink-0" />
                Agendar Avaliação
              </a>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="./images/interior-coei.png" alt="Interior COEI Odontologia" className="w-full h-[400px] object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-navy-700 text-white p-5 rounded-xl shadow-lg hidden md:flex items-center gap-3">
                <UserCircle size={32} weight="duotone" className="text-gold-400" />
                <div>
                  <div className="font-bold text-sm">Dr. Julio Cesar</div>
                  <div className="text-navy-300 text-xs">Diretor Clínico</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ESPECIALIDADES — Grid cards */}
      <Section id="especialidades" className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              <Tooth size={16} weight="duotone" className="flex-shrink-0" />
              Nossas Especialidades
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
              Todas as Especialidades em Um Só Lugar
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Cuidado completo e integrado para a saúde do seu sorriso.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {especialidades.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-navy-100 hover:border-gold-400/50"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-50 group-hover:bg-gold-500/10 flex items-center justify-center mb-4 transition-colors">
                  <e.icon size={24} weight="duotone" className="text-navy-600 group-hover:text-gold-600 transition-colors" />
                </div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{e.nome}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-800 text-white px-8 py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg">
              <WhatsappLogo size={20} weight="duotone" className="flex-shrink-0" />
              Agendar Consulta
            </a>
          </div>
        </div>
      </Section>

      {/* DIFERENCIAIS */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gold-500/10 text-gold-600 text-sm font-medium mb-4">
              <ShieldCheck size={16} weight="duotone" className="flex-shrink-0" />
              Por Que a COEI
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950">
              Diferenciais que Fazem a Diferença
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Stethoscope, titulo: 'Equipe Multidisciplinar', texto: 'Especialistas em todas as áreas da odontologia trabalhando de forma integrada para o melhor resultado.', img: './images/cuidado-dental.jpg' },
              { icon: Sparkle, titulo: 'Tecnologia Avançada', texto: 'Equipamentos de última geração para diagnósticos precisos e tratamentos mais confortáveis e eficientes.', img: './images/endodontia.png' },
              { icon: HandHeart, titulo: 'Atendimento Humanizado', texto: 'Cada paciente é único. Ouvimos suas necessidades e criamos um plano personalizado com carinho e atenção.', img: './images/periodontia.png' },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden mb-5 shadow-lg">
                  <img src={d.img} alt={d.titulo} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <d.icon size={24} weight="duotone" className="text-gold-500 flex-shrink-0" />
                  <h3 className="font-bold text-navy-900 text-xl">{d.titulo}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{d.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONVÊNIO OAB */}
      <Section className="py-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scales size={48} weight="duotone" className="text-gold-400 mx-auto mb-4" />
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-white mb-4">
            Conveniada OAB/SC
          </h2>
          <p className="text-navy-200/70 text-lg max-w-2xl mx-auto mb-8">
            Atendimento especial para inscritos na OAB/SC e seus dependentes. Condições diferenciadas em todas as especialidades da clínica.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-3.5 rounded-lg font-bold transition-all hover:shadow-lg">
            <WhatsappLogo size={20} weight="duotone" className="flex-shrink-0" />
            Saiba Mais sobre o Convênio
          </a>
        </div>
      </Section>

      {/* PROCESSO */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-navy-50 text-navy-700 text-sm font-medium mb-4">
              <CalendarCheck size={16} weight="duotone" className="flex-shrink-0" />
              Como Funciona
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950">
              Do Agendamento ao Sorriso Perfeito
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: '01', t: 'Agendamento', d: 'Entre em contato pelo WhatsApp ou telefone e escolha o melhor horário para você.' },
              { n: '02', t: 'Avaliação Completa', d: 'Exame clínico e radiográfico detalhado com planejamento personalizado.' },
              { n: '03', t: 'Plano Integrado', d: 'Apresentação do plano de tratamento integrado com todas as especialidades necessárias.' },
              { n: '04', t: 'Tratamento', d: 'Execução do tratamento com acompanhamento contínuo até o resultado ideal.' },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative bg-navy-50 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold font-[family-name:var(--font-heading)] text-gold-400/30 mb-3">{p.n}</div>
                <h3 className="font-bold text-navy-900 text-lg mb-2">{p.t}</h3>
                <p className="text-gray-500 text-sm">{p.d}</p>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-3 text-navy-300"><ArrowRight size={20} /></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      <Section id="depoimentos" className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              <Star size={16} weight="duotone" className="flex-shrink-0" />
              Avaliações Reais
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 mb-4">
              O Que Nossos Pacientes Dizem
            </h2>
            <p className="text-gray-600 text-lg">Avaliações reais do Google Maps — 4.6 estrelas.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {depoimentos.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-navy-100">
                <div className="flex mb-3">{[...Array(d.estrelas)].map((_, j) => <Star key={j} size={16} weight="fill" className="text-gold-500" />)}</div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">"{d.texto}"</p>
                <div className="font-semibold text-navy-800">{d.nome}</div>
                <div className="text-gray-400 text-xs mt-0.5">via Google Maps</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={DOC} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-800 font-medium transition-colors">
              Ver mais avaliações no Doctoralia <ArrowRight size={16} className="flex-shrink-0" />
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-navy-50 text-navy-700 text-sm font-medium mb-4">
              <ChatCircleDots size={16} weight="duotone" className="flex-shrink-0" />
              FAQ
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-navy-950">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-3">
            {duvidas.map((d, i) => (
              <div key={i} className="border border-navy-100 rounded-xl overflow-hidden">
                <button onClick={() => setFaqAberto(faqAberto === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-50 transition-colors">
                  <span className="font-semibold text-navy-900 pr-4">{d.p}</span>
                  {faqAberto === i ? <CaretUp size={20} className="text-navy-600 flex-shrink-0" /> : <CaretDown size={20} className="text-gray-400 flex-shrink-0" />}
                </button>
                <AnimatePresence>
                  {faqAberto === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-gray-600 leading-relaxed">{d.r}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* LOCALIZAÇÃO */}
      <Section id="contato" className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-navy-100 text-navy-700 text-sm font-medium mb-4">
              <MapPin size={16} weight="duotone" className="flex-shrink-0" />
              Localização
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950">Onde Estamos</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-navy-100">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={24} weight="duotone" className="text-navy-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Endereço</h4>
                    <p className="text-gray-600 text-sm">{ADDR}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={24} weight="duotone" className="text-navy-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Horário</h4>
                    <p className="text-gray-600 text-sm">Segunda a Sexta: 8h às 19h</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={24} weight="duotone" className="text-navy-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Telefone / WhatsApp</h4>
                    <a href={PHONE_NUM} className="text-navy-700 hover:text-navy-600 font-medium text-sm">(48) 4042-0384</a>
                    <span className="text-gray-400 mx-2">|</span>
                    <a href={WA} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:text-navy-600 font-medium text-sm">(48) 99616-4087</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <InstagramLogo size={24} weight="duotone" className="text-navy-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Instagram</h4>
                    <a href={IG} target="_blank" rel="noopener noreferrer" className="text-navy-700 hover:text-navy-600 font-medium text-sm">@coeiodontologia</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-navy-700 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-all flex-1">
                  <WhatsappLogo size={20} weight="duotone" className="flex-shrink-0" />
                  WhatsApp
                </a>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-navy-600 text-navy-700 hover:bg-navy-50 px-6 py-3 rounded-lg font-semibold transition-all flex-1">
                  <MapPin size={20} weight="duotone" className="flex-shrink-0" />
                  Como Chegar
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-auto">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5503!3d-27.5964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCOEI+Odontologia!5e0!3m2!1spt-BR!2sbr" className="w-full h-full border-0" allowFullScreen loading="lazy" title="Mapa COEI Odontologia" />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-[500px] h-[500px] rounded-full bg-gold-400 blur-[150px] absolute -top-48 right-0" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Tooth size={52} weight="duotone" className="text-gold-400 mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-white mb-6">
            Cuide do Seu Sorriso com Quem Entende
          </h2>
          <p className="text-navy-200/70 text-lg max-w-2xl mx-auto mb-10">
            Agende sua avaliação e descubra como a COEI pode transformar sua saúde bucal com excelência e cuidado personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-8 py-4 rounded-lg text-lg font-bold transition-all hover:shadow-xl">
              <WhatsappLogo size={24} weight="duotone" className="flex-shrink-0" />
              Agendar pelo WhatsApp
            </a>
            <a href={PHONE_NUM} className="inline-flex items-center justify-center gap-2 border-2 border-navy-600 text-navy-200 hover:bg-navy-800 px-8 py-4 rounded-lg text-lg font-medium transition-all">
              <Phone size={24} weight="duotone" className="flex-shrink-0" />
              Ligar Agora
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-navy-950 border-t border-navy-800/50 text-navy-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <img src="./images/logo.png" alt="COEI Odontologia" className="h-12 mb-4" />
              <p className="text-navy-400 text-sm leading-relaxed">Centro Odontológico de Especialidades Integradas — excelência em odontologia no Centro de Florianópolis.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Especialidades</h4>
              <ul className="space-y-2 text-sm text-navy-400">
                <li>Ortodontia</li>
                <li>Implantodontia</li>
                <li>Cirurgia Oral</li>
                <li>Estética Dental</li>
                <li>Endodontia</li>
                <li>Periodontia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-navy-400">
                <li className="flex items-start gap-2"><MapPin size={14} weight="duotone" className="flex-shrink-0 mt-0.5 text-gold-400" /><span>{ADDR}</span></li>
                <li className="flex items-center gap-2"><Phone size={14} weight="duotone" className="flex-shrink-0 text-gold-400" /><a href={PHONE_NUM} className="hover:text-white">(48) 4042-0384</a></li>
                <li className="flex items-center gap-2"><Clock size={14} weight="duotone" className="flex-shrink-0 text-gold-400" /><span>Seg-Sex: 8h às 19h</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Redes Sociais</h4>
              <div className="flex gap-3 mb-6">
                <a href={IG} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-navy-700 flex items-center justify-center transition-colors"><InstagramLogo size={20} weight="duotone" /></a>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-navy-800 hover:bg-navy-700 flex items-center justify-center transition-colors"><WhatsappLogo size={20} weight="duotone" /></a>
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-950 px-5 py-2.5 rounded-lg text-sm font-bold transition-all">
                <WhatsappLogo size={18} weight="duotone" className="flex-shrink-0" />
                Agendar Consulta
              </a>
            </div>
          </div>
          <div className="border-t border-navy-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-500">
            <p>CNPJ: 07.240.173/0001-26 — COEI Centro Odontológico de Especialidades Integradas Ltda</p>
            <p>© 2026 COEI Odontologia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a href={WA} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110" aria-label="WhatsApp">
        <WhatsappLogo size={28} weight="fill" />
      </a>
    </div>
  )
}
