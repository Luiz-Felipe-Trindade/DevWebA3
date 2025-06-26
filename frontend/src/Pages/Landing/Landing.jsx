import  { useState } from "react";
import '../../index.css';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Grid,
  TextField,
  Typography,
  Avatar,
} from "@mui/material";

const Link = ({ href, children, className }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export default function Landing() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email })
    });
    const data = await res.json();
    setMensagem(data.message);
    setNome('');
    setEmail('');
  };

  return (
    
    <Box sx={{ minHeight: '100vh', bgcolor: 'white' }}>
    { /* Cabeçalho de navegação */}
      <Box component="header" sx={{ borderBottom: 1, borderColor: 'grey.100' }}>
        <Container  sx={{ py: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 32, height: 32, bgcolor: 'success.main', borderRadius: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FileText style={{ color: 'white', width:'1.5rem', height: '1.5rem' }} />
            </Box>
            <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              FarmaGestor
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            <Link href="#funcionalidades" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Funcionalidades
            </Link>
            <Link href="#como-funciona" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Como Funciona
            </Link>
            <Link href="#beneficios" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Benefícios
            </Link>
            <Button variant="outlined" sx={{ borderColor: 'success.main', color: 'success.main', ':hover': { bgcolor: 'success.light' } }}>
              Entrar
            </Button>
          </Box>
        </Container>
      </Box>
      {/*Apresentação inicial*/}
      <Box component="section" sx={{ py: 25, background: 'linear-gradient(to bottom right, #d1fae5, #dbeafe)' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: 'text.primary' }}>
            Gerencie pedidos da sua <Box component="span" sx={{ color: 'success.main', display: 'block' }}>farmácia com facilidade</Box>
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
            Sistema completo para receber, processar e gerenciar pedidos de medicamentos vindos do seu app mobile.
            Controle total do fluxo de vendas em uma interface intuitiva.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: 2 }}>
            <Button href="#captura" variant="contained" sx={{ bgcolor: 'success.main', px: 5, py: 1.5, ':hover': { bgcolor: 'success.dark' } }}>
              Começar Agora
              <ArrowRight className="ml-3 w-5 h-5"/>
            </Button>
            <Button href="#funcionalidades" variant="outlined" sx={{ borderColor: 'success.main', color: 'success.main', px: 5, py: 1.5 }}>
              Conhecer Mais
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Apresentação das funcionalidades */}
      <Box component="section" id="funcionalidades" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              Funcionalidades Principais
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 1000, mx: 'auto' }}>
              Tudo que você precisa para gerenciar os pedidos da sua farmácia de forma eficiente
            </Typography>
          </Box>
          <Grid container spacing={5}justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}>
            {[{
              icon: <Shield className="w-7 h-7 text-white-600 mb-4 mt-4 ml-0.4" />,
              title: "Controle de Acesso Seguro",
              description: "Cadastro validado por CNPJ autorizado com sistema de autenticação robusto"
            }, {
              icon: <Smartphone className="w-7 h-7 text-white-600 mb-4 mt-4 ml-0.4" />,
              title: "Integração Mobile",
              description: "Receba pedidos diretamente do seu app mobile em tempo real"
            }, {
              icon: <Clock className="w-7 h-7 text-white-600 mb-4 mt-4 ml-0.4"  />,
              title: "Gestão de Status",
              description: "Controle completo dos pedidos: pendentes, aguardando pagamento e não faturados"
            }, {
              icon: <FileText className="w-7 h-7 text-white-600 mb-4 mt-4 ml-0.4"  />,
              title: "Histórico de Pedidos",
              description: "Visualize todos os pedidos concluídos ou cancelados, e entre em contato com o cliente rápidamente via Whatsapp"
            },
            {
              icon: <Users className="w-7 h-7 text-white-600 mb-4 mt-4 ml-0.4"  />,
              title: "Contato Rápido",
              description: "Com apenas um clique, inicie uma conversa via Whatsapp com o cliente"
            }, {
              icon: <CheckCircle className="w-7 h-7 text-white-600 mb-4 mt-4 ml-0.4" />,
              title: "Sistema de Notificações",
              description: "Notificações automáticas para clientes sobre mudanças de status dos pedidos"
            },
            {
              icon: <FileText className="w-7 h-7 text-white-600 mb-4 mt-4 ml-0.4"  />,
              title: "Relatórios dos pedidos",
              description: "Gere relatórios mensais, semanais ou diários, com todas as informações referentes aos pedidos realizados no período"
            },
          ].map((item, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index} width={500}>
                <Card sx={{ p: 2, height: '100%', width: '100%'}}>
                  <CardHeader
                    avatar={<Avatar sx={{ bgcolor: 'success.main' }}>{item.icon}</Avatar>}
                    title={<Typography variant="h6">{item.title}</Typography>}
                    subheader={<Typography variant="body2" color="text.secondary">{item.description}</Typography>}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/*Apresentação de como funciona o processo com o gestor */}
      <Box component="section" id="como-funciona" sx={{ py: 10}}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              Como Funciona
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
              Processo simples e eficiente para gerenciar todos os seus pedidos
            </Typography>
          </Box>
          <Grid container spacing={10} justifyContent={"center"} columns={{ xs: 4, sm: 8, md: 12 }} >
            {[{
              number: 1,
              title: "Receba Pedidos",
              description: "Os pedidos chegam automaticamente a partir do app mobile com todas as informações necessárias"
            }, {
              number: 2,
              title: "Aceite ou Recuse",
              description: "Analise os pedidos e tome a decisão de aceitar ou recusar, enviando feedback ao cliente"
            }, {
              number: 3,
              title: "Gerencie o Pagamento",
              description: "Acompanhe o status do pagamento e prepare os produtos para entrega ou retirada"
            },
            {
              number: 4,
              title: "Acompanhe a separação",
              description: "Monitore o status do pedido e garanta que tudo esteja pronto para a entrega"
            },
            {
              number: 5,
              title: "Confirmar Entrega",
              description: "Finalize o processo confirmando a entrega ou retirada do pedido pelo cliente"
            }].map(({ number, title, description }) => (
              <Grid  size={{xs: 12, md: 6, lg: 4}}key={number} sx={{border: '1px solid green', borderRadius: 2, p: 4, textAlign: 'center'}}>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: 'success.main',
                    
                    borderRadius: '50%',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: 24,
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  {number}
                </Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {description}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/*Beneficios de usar nossso gestor*/}
      <Box component="section" id="beneficios" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{mx: 'auto', justifyContent: 'center'}}>
            <Grid container size={{md: 12, lg: 6}} sx={{justifyContent: 'center', alignContent: 'center' }} >
              <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                Por que escolher o FarmaGestor?
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[{
                  icon: <CheckCircle sx={{ color: 'success.main', mt: 0.5 }} />,
                  title: "Interface Intuitiva",
                  description: "Design minimalista que facilita o uso diário sem complicações"
                }, {
                  icon: <CheckCircle sx={{ color: 'success.main', mt: 0.5 }} />,
                  title: "Segurança Garantida",
                  description: "Sistema de validação por CNPJ e controle rigoroso de acesso"
                }, {
                  icon: <CheckCircle sx={{ color: 'success.main', mt: 0.5 }} />,
                  title: "Integração Completa",
                  description: "Conecta perfeitamente com seu sistema de notas fiscais existente"
                }, {
                  icon: <CheckCircle sx={{ color: 'success.main', mt: 0.5 }} />,
                  title: "Comunicação Automática",
                  description: "Notificações automáticas mantêm seus clientes sempre informados"
                }].map(({ icon, title, description }, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    {icon}
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                        {title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid size={{xs:12, lg:6}} sx={{ textAlign: 'center' }}>
              <Box sx={{ bgcolor: 'success.light', borderRadius: 3, p: 6, maxWidth: 360, mx: 'auto' }}>
                <Box sx={{ width: 128, height: 128, bgcolor: 'success.main', borderRadius: 3, mx: 'auto', mb: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <FileText style={{ color: 'white', width: 64, height: 64 }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Pronto para começar?
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
                  Cadastre sua farmácia e comece a gerenciar seus pedidos hoje mesmo
                </Typography>
                <Button href="#captura" variant="contained" sx={{ bgcolor: 'success.main', ':hover': { bgcolor: 'success.dark' } }}>
                  Cadastrar Farmácia
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/*captura das informações do lead*/}
      <Box component="section" id="captura"sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}>
            Se interessou pelo FarmaGestor?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
            Preencha o formulário abaixo e nossa equipe entrará em contato com você
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              bgcolor: 'background.paper',
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              border: '1px solid',
              borderColor: 'success.light',
            }}
          >
            <TextField
              label="Nome"
              variant="outlined"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'success.light' },
                  '&:hover fieldset': { borderColor: 'success.main' },
                  '&.Mui-focused fieldset': { borderColor: 'success.dark' },
                },
              }}
            />
            <TextField
              label="E-mail"
              type="email"
              variant="outlined"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'success.light' },
                  '&:hover fieldset': { borderColor: 'success.main' },
                  '&.Mui-focused fieldset': { borderColor: 'success.dark' },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: 'success.main',
                color: 'common.white',
                fontWeight: 'bold',
                py: 1.5,
                ':hover': { bgcolor: 'success.dark' },
              }}
            >
              Tenho Interesse
              <ArrowRight className="ml-2 w-5 h-5" style={{ marginLeft: 8 }} />
            </Button>
            {mensagem && (
              <Typography sx={{ color: 'success.main', mt: 2, fontWeight: 'medium' }}>
                {mensagem}
              </Typography>
            )}
          </Box>
        </Container>
      </Box>
      {/* Footer */}
      <Box component="footer" sx={{ py: 8, bgcolor: 'grey.900' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{xs:12, md:3}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Box sx={{ width: 32, height: 32, bgcolor: 'success.main', borderRadius: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <FileText style={{ color: 'white', width: 20, height: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ color: 'common.white', fontWeight: 'bold' }}>
                  FarmaGestor
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                Sistema completo para gestão de pedidos farmacêuticos
              </Typography>
            </Grid>
            <Grid size={{xs:12, md:3}}>
              <Typography variant="subtitle1" sx={{ color: 'common.white', mb: 1, fontWeight: 'bold' }}>
                Produto
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, color: 'grey.400' }}>
                {['Funcionalidades', 'Preços', 'Demonstração'].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </Box>
            </Grid>
            <Grid size={{xs:12, md:3}}>
              <Typography variant="subtitle1" sx={{ color: 'common.white', mb: 1, fontWeight: 'bold' }}>
                Suporte
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, color: 'grey.400' }}>
                {['Central de Ajuda', 'Contato', 'Documentação'].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </Box>
            </Grid>
            <Grid size={{xs:12, md:3}}>
              <Typography variant="subtitle1" sx={{ color: 'common.white', mb: 1, fontWeight: 'bold' }}>
                Legal
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, color: 'grey.400' }}>
                {['Política de Privacidade', 'Termos de Uso'].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
