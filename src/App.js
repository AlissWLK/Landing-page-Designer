import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  MessageCircle, 
  Star, 
  Check, 
  ArrowRight,
  Palette,
  Zap,
  Users,
  Clock,
  FileText,
  Download,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const packages = [
    {
      name: "Pacote Essencial",
      posts: 8,
      price: 450,
      description: "Ideal para começar sua presença digital",
      features: [
        "8 posts criativos",
        "Formatos: Feed + Stories",
        "Identidade visual consistente",
        "Entrega em 7 dias",
        "Revisões incluídas"
      ],
      popular: false
    },
    {
      name: "Pacote Profissional",
      posts: 10,
      price: 500,
      description: "Para quem quer se destacar nas redes",
      features: [
        "10 posts criativos",
        "Formatos: Feed + Stories + Carrossel",
        "Identidade visual premium",
        "Entrega em 7 dias",
        "Revisões ilimitadas",
        "Calendário editorial"
      ],
      popular: true
    },
    {
      name: "Pacote Expansão",
      posts: 15,
      price: 675,
      description: "Máxima presença e engajamento",
      features: [
        "15 posts criativos",
        "Todos os formatos disponíveis",
        "Identidade visual exclusiva",
        "Entrega em 7 dias",
        "Revisões ilimitadas",
        "Calendário + Copywriting",
        "Consultoria de estratégia"
      ],
      popular: false
    },
    {
      name: "Pacote Premium",
      posts: 20,
      price: 850,
      description: "Solução completa para sua marca",
      features: [
        "20 posts criativos",
        "Todos os formatos + Reels",
        "Identidade visual exclusiva",
        "Entrega em 7 dias",
        "Revisões ilimitadas",
        "Calendário + Copywriting",
        "Consultoria + Análise de métricas",
        "Suporte prioritário"
      ],
      popular: false
    }
  ]

  const faqs = [
    {
      question: "Qual é o prazo de entrega dos pacotes?",
      answer: "Todos os nossos pacotes são entregues em até 7 dias úteis após a confirmação do briefing e pagamento. Trabalhamos com prazos fixos para garantir que você possa planejar suas publicações com antecedência."
    },
    {
      question: "Como funcionam os valores de cada pacote?",
      answer: "Nossos pacotes são estruturados por quantidade de posts: 8 posts por R$ 450, 10 posts por R$ 500, 15 posts por R$ 675 e 20 posts por R$ 850. Cada pacote inclui diferentes formatos (feed, stories, carrossel) e serviços adicionais conforme a categoria escolhida."
    },
    {
      question: "Como vou receber os arquivos?",
      answer: "Todos os arquivos são entregues em alta resolução através de uma pasta compartilhada no Google Drive ou WeTransfer, organizados por data de publicação. Você receberá os posts nos formatos adequados para cada rede social (JPG, PNG, MP4 para stories animados)."
    },
    {
      question: "Como funciona a prestação do serviço?",
      answer: "Trabalhamos em parceria estratégica com agências de marketing e design gráfico, garantindo um serviço profissional e especializado. Nossa equipe desenvolve cada projeto com foco na identidade visual da sua marca e nas melhores práticas de design para redes sociais."
    },
    {
      question: "Posso solicitar alterações nos posts?",
      answer: "Sim! Todos os pacotes incluem revisões. O Pacote Essencial inclui revisões básicas, enquanto os demais pacotes oferecem revisões ilimitadas até sua total satisfação com o resultado final."
    },
    {
      question: "Que tipo de conteúdo vocês criam?",
      answer: "Criamos posts para feed do Instagram, stories, carrosséis informativos, posts para Facebook, LinkedIn e outras redes sociais. Nosso foco é em design moderno, identidade visual consistente e conteúdo que gera engajamento."
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      business: "Loja de Roupas Online",
      text: "Os posts criados aumentaram muito o engajamento da minha loja. Design incrível e entrega sempre no prazo!",
      rating: 5
    },
    {
      name: "João Santos",
      business: "Consultoria Empresarial",
      text: "Profissionalismo excepcional. A identidade visual ficou perfeita e os resultados apareceram rapidamente.",
      rating: 5
    },
    {
      name: "Ana Costa",
      business: "Clínica de Estética",
      text: "Superou todas as expectativas! Os posts são lindos e meus clientes sempre elogiam o visual da marca.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              DesignPro
            </span>
          </div>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            onClick={() => window.open('https://wa.me/5549999047186', '_blank')}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Falar no WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">
              ✨ Design Profissional para Redes Sociais
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Transforme sua marca com posts que convertem
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Pacotes completos de design para redes sociais. Identidade visual forte, 
              posts criativos e entrega garantida em 7 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://wa.me/5549999047186', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Ver Portfólio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Por que escolher nossos pacotes?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combinamos criatividade, estratégia e profissionalismo para elevar sua presença digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Entrega Rápida</h3>
              <p className="text-gray-600">
                Todos os pacotes entregues em até 7 dias úteis, sem atrasos
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Design Exclusivo</h3>
              <p className="text-gray-600">
                Identidade visual única e consistente para sua marca se destacar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Suporte Completo</h3>
              <p className="text-gray-600">
                Acompanhamento personalizado e revisões até sua total satisfação
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4" id="pacotes">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Escolha seu pacote ideal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pacotes flexíveis para diferentes necessidades e orçamentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`relative h-full ${pkg.popular ? 'ring-2 ring-purple-500 shadow-xl scale-105' : 'hover:shadow-lg'} transition-all duration-300`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                      Mais Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-800">{pkg.name}</CardTitle>
                    <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-purple-600">R$ {pkg.price}</span>
                      <span className="text-gray-500 ml-2">/ {pkg.posts} posts</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${pkg.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                      onClick={() => window.open('https://wa.me/5549999047186', '_blank')}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contratar Agora
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais de quem confia no nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4" id="faq">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg text-gray-800">{faq.question}</CardTitle>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent className="pt-0">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Pronto para transformar sua presença digital?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Entre em contato agora e receba uma proposta personalizada para sua marca. 
              Vamos criar juntos posts que realmente convertem!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://wa.me/5549999047186', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Conversar no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Palette className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold">DesignPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Especialistas em design para redes sociais. Transformamos sua marca com posts que convertem.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Posts para Instagram</li>
                <li>Stories Criativos</li>
                <li>Design para Facebook</li>
                <li>Identidade Visual</li>
                <li>Calendário Editorial</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp: (49) 99904-7186
                </p>
                <p>Atendimento: Seg-Sex, 9h às 18h</p>
                <p>Entrega: 7 dias úteis</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DesignPro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
