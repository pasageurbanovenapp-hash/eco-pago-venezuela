import { useState, useEffect } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Globe, 
  Terminal,
  Layout,
  Palette,
  Zap,
  Shield,
  BookOpen,
  ChevronDown,
  Monitor,
  FileCode,
  ArrowRight,
  Star,
  Code2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const frontendTechs = [
    { name: 'HTML5', icon: <FileCode className="w-8 h-8" />, color: 'tech-html', desc: 'Estructura de la web' },
    { name: 'CSS3', icon: <Palette className="w-8 h-8" />, color: 'tech-css', desc: 'Estilos y diseño' },
    { name: 'JavaScript', icon: <Code className="w-8 h-8" />, color: 'tech-js', desc: 'Interactividad' },
    { name: 'React', icon: <Zap className="w-8 h-8" />, color: 'tech-react', desc: 'Framework UI' },
  ];

  const backendTechs = [
    { name: 'Node.js', icon: <Server className="w-8 h-8" />, color: 'tech-node', desc: 'JavaScript en servidor' },
    { name: 'Python', icon: <Terminal className="w-8 h-8" />, color: 'tech-python', desc: 'Lenguaje versátil' },
    { name: 'SQL', icon: <Database className="w-8 h-8" />, color: 'tech-database', desc: 'Bases de datos' },
    { name: 'APIs', icon: <Globe className="w-8 h-8" />, color: 'text-orange-500', desc: 'Comunicación' },
  ];

  const comparisons = [
    { aspect: 'Visible al usuario', frontend: 'Sí - Todo lo que ves', backend: 'No - Trabajo oculto' },
    { aspect: 'Lenguajes principales', frontend: 'HTML, CSS, JavaScript', backend: 'Python, Java, PHP, Node.js' },
    { aspect: 'Enfoque', frontend: 'Diseño y experiencia', backend: 'Lógica y datos' },
    { aspect: 'Trabaja con', frontend: 'Navegador del usuario', backend: 'Servidores y bases de datos' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-white font-bold text-lg">DevLearn</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['inicio', 'frontend', 'backend', 'comparacion', 'tecnologias', 'recursos'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm capitalize transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section === 'comparacion' ? 'Comparación' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-1 text-yellow-400" />
              Para estudiantes de 4to año de bachillerato
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Frontend
            </span>
            <span className="text-white/80 mx-4">vs</span>
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Backend
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Descubre los dos mundos del desarrollo web. Aprende qué hace que una página web 
            <span className="text-cyan-400 font-semibold"> se vea increíble</span> y qué la hace 
            <span className="text-emerald-400 font-semibold"> funcionar perfectamente</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
              onClick={() => scrollToSection('frontend')}
            >
              <Layout className="w-5 h-5 mr-2" />
              Explorar Frontend
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 px-8"
              onClick={() => scrollToSection('backend')}
            >
              <Server className="w-5 h-5 mr-2" />
              Explorar Backend
            </Button>
          </div>

          <div className="mt-16 animate-bounce-slow">
            <ChevronDown className="w-8 h-8 text-white/50 mx-auto" />
          </div>
        </div>
      </section>

      {/* Frontend Section */}
      <section id="frontend" className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Parte 1</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Qué es el <span className="text-blue-600">Frontend</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todo lo que ves e interactúas en una página web. Es la cara visible de Internet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="card-hover border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Monitor className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Interfaz de Usuario (UI)</h3>
                      <p className="text-gray-600">Diseña cómo se ve la página: colores, botones, imágenes, tipografías y disposición de elementos.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Experiencia de Usuario (UX)</h3>
                      <p className="text-gray-600">Crea interacciones fluidas: animaciones, respuestas a clics, formularios dinámicos.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover border-l-4 border-l-pink-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-pink-100 rounded-lg">
                      <Smartphone className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                      <p className="text-gray-600">Adapta la página para que se vea bien en celulares, tablets y computadoras.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="glass bg-white/80 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4 pb-4 border-b">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm text-gray-500 ml-2">index.html</span>
                </div>
                <pre className="code-block text-sm text-green-400 overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
  <title>Mi Primera Página</title>
  <style>
    body {
      background: linear-gradient(45deg, #667eea, #764ba2);
      font-family: Arial;
    }
    .boton {
      background: #ff6b6b;
      color: white;
      padding: 15px 30px;
      border-radius: 25px;
      cursor: pointer;
      transition: transform 0.3s;
    }
    .boton:hover {
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <h1>¡Hola Mundo!</h1>
  <button class="boton">
    Haz clic aquí
  </button>
  <script>
    document.querySelector('.boton')
      .addEventListener('click', () => {
        alert('¡Funciona!');
      });
  </script>
</body>
</html>`}
                </pre>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Backend Section */}
      <section id="backend" className="py-24 px-4 bg-gradient-to-br from-gray-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-900 text-emerald-400 border-emerald-700">Parte 2</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Qué es el <span className="text-emerald-400">Backend</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              El cerebro detrás de la aplicación. Procesa datos, maneja la lógica y conecta todo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="glass-dark rounded-2xl p-6 shadow-2xl border border-gray-700">
                <div className="flex items-center space-x-2 mb-4 pb-4 border-b border-gray-700">
                  <Terminal className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-gray-400">server.py</span>
                </div>
                <pre className="code-block text-sm text-emerald-400 overflow-x-auto">
{`from flask import Flask, jsonify
import sqlite3

app = Flask(__name__)

# Ruta para obtener usuarios
@app.route('/api/usuarios')
def obtener_usuarios():
    conexion = sqlite3.connect('datos.db')
    cursor = conexion.cursor()
    
    cursor.execute('SELECT * FROM usuarios')
    usuarios = cursor.fetchall()
    
    conexion.close()
    
    return jsonify({
        'usuarios': usuarios,
        'total': len(usuarios)
    })

# Ruta para crear usuario
@app.route('/api/usuarios', methods=['POST'])
def crear_usuario():
    datos = request.get_json()
    nombre = datos['nombre']
    email = datos['email']
    
    # Guardar en base de datos
    conexion = sqlite3.connect('datos.db')
    cursor = conexion.cursor()
    cursor.execute(
        'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
        (nombre, email)
    )
    conexion.commit()
    conexion.close()
    
    return jsonify({'mensaje': 'Usuario creado'}), 201

if __name__ == '__main__':
    app.run(debug=True)`}
                </pre>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl" />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <Card className="card-hover bg-gray-800 border-gray-700 border-l-4 border-l-emerald-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-900/50 rounded-lg">
                      <Server className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Servidor y Lógica</h3>
                      <p className="text-gray-400">Procesa las solicitudes del frontend, ejecuta algoritmos y toma decisiones basadas en datos.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover bg-gray-800 border-gray-700 border-l-4 border-l-cyan-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyan-900/50 rounded-lg">
                      <Database className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Bases de Datos</h3>
                      <p className="text-gray-400">Almacena y recupera información: usuarios, productos, publicaciones, todo de forma segura.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover bg-gray-800 border-gray-700 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-900/50 rounded-lg">
                      <Shield className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">Seguridad</h3>
                      <p className="text-gray-400">Autenticación, autorización, encriptación de datos y protección contra ataques.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparacion" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Comparación</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frontend <span className="text-gray-400">vs</span> Backend
            </h2>
            <p className="text-xl text-gray-600">
              Entiende las diferencias clave entre ambos mundos
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-xl">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="py-4 px-6 text-left font-semibold">Aspecto</th>
                  <th className="py-4 px-6 text-center font-semibold">
                    <Layout className="w-5 h-5 inline mr-2" />
                    Frontend
                  </th>
                  <th className="py-4 px-6 text-center font-semibold">
                    <Server className="w-5 h-5 inline mr-2" />
                    Backend
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-6 font-medium text-gray-900">{item.aspect}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                        {item.frontend}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-emerald-100 text-emerald-700">
                        {item.backend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Visual Diagram */}
          <div className="mt-16">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                ¿Cómo se comunican?
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* User */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Monitor className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-semibold text-gray-700">Usuario</p>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
                  <span className="text-xs text-gray-500 mt-1">HTTP Request</span>
                </div>

                {/* Frontend */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Layout className="w-12 h-12 text-white" />
                  </div>
                  <p className="font-semibold text-gray-700">Frontend</p>
                  <p className="text-xs text-gray-500">Navegador</p>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
                  <span className="text-xs text-gray-500 mt-1">API Call</span>
                </div>

                {/* Backend */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Server className="w-12 h-12 text-white" />
                  </div>
                  <p className="font-semibold text-gray-700">Backend</p>
                  <p className="text-xs text-gray-500">Servidor</p>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
                  <span className="text-xs text-gray-500 mt-1">Query</span>
                </div>

                {/* Database */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-semibold text-gray-700">Base de Datos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700">Tecnologías</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Herramientas del Desarrollador
            </h2>
            <p className="text-xl text-gray-600">
              Las tecnologías más populares que debes conocer
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="frontend" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Layout className="w-4 h-4 mr-2" />
                Frontend
              </TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white">
                <Server className="w-4 h-4 mr-2" />
                Backend
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {frontendTechs.map((tech, index) => (
                  <Card key={index} className="card-hover text-center p-6">
                    <div className={`${tech.color} mb-4 flex justify-center`}>
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.desc}</p>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">Ruta de Aprendizaje Frontend</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {['HTML5', 'CSS3', 'JavaScript', 'Git', 'React', 'TypeScript', 'Next.js', 'Tailwind'].map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <Badge className="bg-white text-blue-700 border-blue-200 px-4 py-2 text-lg">
                        {i + 1}. {skill}
                      </Badge>
                      {i < 7 && <ArrowRight className="w-4 h-4 text-blue-400 mx-2" />}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="backend">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {backendTechs.map((tech, index) => (
                  <Card key={index} className="card-hover text-center p-6">
                    <div className={`${tech.color} mb-4 flex justify-center`}>
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.desc}</p>
                  </Card>
                ))}
              </div>

              <div className="mt-12 bg-emerald-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-emerald-900">Ruta de Aprendizaje Backend</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Python/Node.js', 'HTTP/REST', 'SQL', 'NoSQL', 'Docker', 'AWS/Cloud', 'Microservicios'].map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <Badge className="bg-white text-emerald-700 border-emerald-200 px-4 py-2 text-lg">
                        {i + 1}. {skill}
                      </Badge>
                      {i < 6 && <ArrowRight className="w-4 h-4 text-emerald-400 mx-2" />}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Resources Section */}
      <section id="recursos" className="py-24 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Recursos</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Dónde Aprender?
            </h2>
            <p className="text-xl text-gray-300">
              Plataformas gratuitas y de pago para comenzar tu viaje
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'freeCodeCamp', desc: 'Curso completo gratuito con certificados', icon: <Code className="w-6 h-6" />, color: 'from-green-500 to-emerald-600' },
              { name: 'MDN Web Docs', desc: 'Documentación oficial de Mozilla', icon: <BookOpen className="w-6 h-6" />, color: 'from-blue-500 to-cyan-600' },
              { name: 'W3Schools', desc: 'Tutoriales interactivos para principiantes', icon: <Globe className="w-6 h-6" />, color: 'from-green-600 to-teal-600' },
              { name: 'Codecademy', desc: 'Plataforma interactiva con proyectos', icon: <Terminal className="w-6 h-6" />, color: 'from-purple-500 to-pink-600' },
              { name: 'Udemy', desc: 'Cursos de pago con descuentos frecuentes', icon: <VideoIcon className="w-6 h-6" />, color: 'from-orange-500 to-red-600' },
              { name: 'YouTube', desc: 'Canales como HolaMundo, Developeando', icon: <PlayIcon className="w-6 h-6" />, color: 'from-red-500 to-pink-600' },
            ].map((resource, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 card-hover overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${resource.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${resource.color}`}>
                      <div className="text-white">{resource.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{resource.name}</h3>
                  </div>
                  <p className="text-gray-300">{resource.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips Section */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-400" />
              Consejos para Estudiantes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                  <p className="text-gray-300">Comienza con HTML y CSS, son la base de todo.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                  <p className="text-gray-300">Practica todos los días, aunque sea 30 minutos.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                  <p className="text-gray-300">Crea proyectos personales para tu portafolio.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                  <p className="text-gray-300">Únete a comunidades como Discord o Reddit.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">5</div>
                  <p className="text-gray-300">No te compares, cada persona aprende a su ritmo.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">6</div>
                  <p className="text-gray-300">¡Diviértete! La programación es creativa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="w-8 h-8 text-primary" />
            <span className="text-white font-bold text-xl">DevLearn</span>
          </div>
          <p className="text-gray-400 mb-4">
            Creado con ❤️ para estudiantes de 4to año de bachillerato
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 - Tu viaje como desarrollador comienza aquí
          </p>
        </div>
      </footer>
    </div>
  );
}

// Additional icon components
function Smartphone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  );
}

function VideoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
    </svg>
  );
}

export default App;
