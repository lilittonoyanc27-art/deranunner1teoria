import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  User, 
  Users, 
  Info, 
  ChevronRight, 
  Star,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

// --- Types ---

type Section = 'intro' | 'singular' | 'plural' | 'rules' | 'formal';

interface PronounData {
  spanish: string;
  armenian: string;
  description: string;
  example: string;
  exampleTranslation: string;
  gender?: 'masculine' | 'feminine' | 'both';
}

// --- Data ---

const SINGULAR_PRONOUNS: PronounData[] = [
  { 
    spanish: "Yo", 
    armenian: "Ես", 
    description: "Օգտագործվում է, երբ խոսում ես քո մասին:", 
    example: "Yo soy Arthur.", 
    exampleTranslation: "Ես Արթուրն եմ:" 
  },
  { 
    spanish: "Tú", 
    armenian: "Դու", 
    description: "Օգտագործվում է ընկերների կամ հասակակիցների հետ խոսելիս (մտերիմ):", 
    example: "Tú eres mi amigo.", 
    exampleTranslation: "Դու իմ ընկերն ես:" 
  },
  { 
    spanish: "Él", 
    armenian: "Նա (արական)", 
    description: "Օգտագործվում է տղայի կամ տղամարդու մասին խոսելիս:", 
    example: "Él es inteligente.", 
    exampleTranslation: "Նա խելացի է:",
    gender: 'masculine'
  },
  { 
    spanish: "Ella", 
    armenian: "Նա (իգական)", 
    description: "Օգտագործվում է աղջկա կամ կնոջ մասին խոսելիս:", 
    example: "Ella es bonita.", 
    exampleTranslation: "Նա գեղեցիկ է:",
    gender: 'feminine'
  },
  { 
    spanish: "Usted", 
    armenian: "Դուք (հարգալից)", 
    description: "Օգտագործվում է անծանոթների կամ մեծահասակների հետ հարգալից խոսելիս:", 
    example: "Usted es el profesor.", 
    exampleTranslation: "Դուք ուսուցիչն եք:" 
  }
];

const PLURAL_PRONOUNS: PronounData[] = [
  { 
    spanish: "Nosotros", 
    armenian: "Մենք (արական/խառը)", 
    description: "Ես + ուրիշներ (եթե խմբում կա գոնե մեկ տղա):", 
    example: "Nosotros somos estudiantes.", 
    exampleTranslation: "Մենք ուսանողներ ենք:",
    gender: 'masculine'
  },
  { 
    spanish: "Nosotras", 
    armenian: "Մենք (իգական)", 
    description: "Ես + ուրիշներ (միայն եթե խմբում ՄԻԱՅՆ աղջիկներ են):", 
    example: "Nosotras somos amigas.", 
    exampleTranslation: "Մենք ընկերուհիներ ենք:",
    gender: 'feminine'
  },
  { 
    spanish: "Vosotros", 
    armenian: "Դուք (արական/խառը)", 
    description: "Դու + ուրիշներ (Իսպանիայում, մտերիմ խմբի համար):", 
    example: "Vosotros sois geniales.", 
    exampleTranslation: "Դուք հիանալի եք:",
    gender: 'masculine'
  },
  { 
    spanish: "Ellos", 
    armenian: "Նրանք (արական/խառը)", 
    description: "Տղաների կամ խառը խմբի մասին խոսելիս:", 
    example: "Ellos juegan fútbol.", 
    exampleTranslation: "Նրանք ֆուտբոլ են խաղում:",
    gender: 'masculine'
  },
  { 
    spanish: "Ellas", 
    armenian: "Նրանք (իգական)", 
    description: "Միայն աղջիկների խմբի մասին խոսելիս:", 
    example: "Ellas bailan bien.", 
    exampleTranslation: "Նրանք լավ են պարում:",
    gender: 'feminine'
  },
  { 
    spanish: "Ustedes", 
    armenian: "Դուք (հոգնակի)", 
    description: "Օգտագործվում է մի խումբ մարդկանց դիմելիս (Լատինական Ամերիկայում՝ բոլորի համար, Իսպանիայում՝ հարգալից):", 
    example: "Ustedes son muy amables.", 
    exampleTranslation: "Դուք շատ բարեհամբույր եք:" 
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('intro');

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="relative overflow-hidden bg-indigo-600 rounded-[40px] p-8 text-white shadow-2xl shadow-indigo-500/20">
              <Sparkles className="absolute top-4 right-4 w-12 h-12 text-white/20 animate-pulse" />
              <h2 className="text-4xl font-black mb-4 leading-tight">Ի՞ՆՉ ԵՆ ԱՆՁՆԱԿԱՆ ԴԵՐԱՆՈՒՆՆԵՐԸ</h2>
              <p className="text-indigo-100 text-lg leading-relaxed font-medium">
                Անձնական դերանունները այն բառերն են, որոնք մենք օգտագործում ենք մարդկանց անունների փոխարեն: Օրինակ՝ «Արթուրի» փոխարեն ասում ենք «Նա»:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-white border border-slate-200 rounded-[32px] flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-2xl">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xl mb-1">Եզակի թիվ</h4>
                  <p className="text-slate-500 font-medium">Երբ խոսքը մեկ հոգու մասին է (Ես, Դու, Նա):</p>
                </div>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-[32px] flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-2xl">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xl mb-1">Հոգնակի թիվ</h4>
                  <p className="text-slate-500 font-medium">Երբ խոսքը շատերի մասին է (Մենք, Դուք, Նրանք):</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setActiveSection('singular')}
              className="w-full py-6 bg-slate-900 text-white rounded-[32px] font-black text-xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-95"
            >
              ՍԿՍԵԼ ՈՒՍՈՒՄՆԱՍԻՐՈՒԹՅՈՒՆԸ
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        );

      case 'singular':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-8 bg-blue-500 rounded-full" />
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">ԵԶԱԿԻ ԹԻՎ</h2>
            </div>

            <div className="space-y-4">
              {SINGULAR_PRONOUNS.map((p, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-[32px] p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-4xl font-black text-indigo-600">{p.spanish}</span>
                    <span className="px-4 py-1.5 bg-slate-100 rounded-full text-slate-600 font-black text-sm">{p.armenian}</span>
                  </div>
                  <p className="text-slate-600 font-medium mb-4 leading-relaxed">{p.description}</p>
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <p className="text-indigo-600 font-black italic text-lg">"{p.example}"</p>
                    <p className="text-slate-400 text-sm font-bold mt-1">→ {p.exampleTranslation}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'plural':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-8 bg-purple-500 rounded-full" />
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">ՀՈԳՆԱԿԻ ԹԻՎ</h2>
            </div>

            <div className="space-y-4">
              {PLURAL_PRONOUNS.map((p, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-[32px] p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-4xl font-black text-purple-600">{p.spanish}</span>
                    <span className="px-4 py-1.5 bg-slate-100 rounded-full text-slate-600 font-black text-sm">{p.armenian}</span>
                  </div>
                  <p className="text-slate-600 font-medium mb-4 leading-relaxed">{p.description}</p>
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <p className="text-purple-600 font-black italic text-lg">"{p.example}"</p>
                    <p className="text-slate-400 text-sm font-bold mt-1">→ {p.exampleTranslation}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'rules':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="bg-amber-50 border border-amber-200 rounded-[40px] p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-500 rounded-2xl">
                  <Info className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-black text-amber-900 uppercase tracking-tight">ՍԵՌԻ ԿԱՆՈՆԸ</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl border border-amber-100 shadow-sm">
                  <h4 className="text-xl font-black text-slate-900 mb-3">Ի՞նչ է -os և -as վերջավորությունը:</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Իսպաներենում հոգնակի դերանունները փոխվում են ըստ սեռի.
                  </p>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      <span className="font-bold text-slate-700"><b>-os</b>: Միայն տղաներ կամ խառը խումբ:</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-pink-500" />
                      <span className="font-bold text-slate-700"><b>-as</b>: Միայն աղջիկներ:</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-indigo-900 text-white p-8 rounded-[40px] relative overflow-hidden">
                  <Star className="absolute -bottom-4 -right-4 w-24 h-24 text-white/10 rotate-12" />
                  <h4 className="text-xl font-black mb-4">ՕՐԻՆԱԿ</h4>
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <span className="text-indigo-300 text-xs font-black uppercase tracking-widest mb-1">Խառը խումբ (1 տղա + 10 աղջիկ)</span>
                      <span className="text-2xl font-black">Nosotros</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex flex-col">
                      <span className="text-indigo-300 text-xs font-black uppercase tracking-widest mb-1">Միայն աղջիկներ</span>
                      <span className="text-2xl font-black">Nosotras</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'formal':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="bg-slate-900 text-white rounded-[40px] p-8 relative overflow-hidden">
              <ShieldCheck className="absolute top-4 right-4 w-12 h-12 text-white/10" />
              <h2 className="text-3xl font-black mb-4">ՀԱՐԳԱԼԻՑ ԴԻՄԵԼԱՁԵՎ</h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                Իսպաներենում կա երկու ձև «Դու» ասելու համար՝ կախված նրանից, թե ում հետ ես խոսում:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="p-8 bg-white border border-slate-200 rounded-[40px] shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-indigo-600">Tú</span>
                    <span className="text-slate-400 text-xs font-bold mt-1">Հոգնակին՝ Vosotros</span>
                  </div>
                  <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest">Մտերիմ</span>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Օգտագործիր ընկերների, ընտանիքի անդամների կամ երեխաների հետ:
                </p>
              </div>

              <div className="p-8 bg-white border border-slate-200 rounded-[40px] shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-emerald-600">Usted</span>
                    <span className="text-slate-400 text-xs font-bold mt-1">Հոգնակին՝ Ustedes</span>
                  </div>
                  <span className="px-4 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black uppercase tracking-widest">Հարգալից</span>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">
                  Օգտագործիր անծանոթների, մեծահասակների կամ պաշտոնական անձանց հետ:
                </p>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100">
      {/* Sidebar / Navigation */}
      <nav className="fixed top-0 left-0 h-full w-20 md:w-72 bg-white border-r border-slate-200 z-50 flex flex-col p-4 md:p-8">
        <div className="mb-12 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-600/20">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h1 className="hidden md:block text-xl font-black tracking-tighter uppercase">Spanish Guide</h1>
        </div>

        <div className="flex-1 space-y-2">
          {[
            { id: 'intro', icon: Sparkles, label: 'Ներածություն' },
            { id: 'singular', icon: User, label: 'Եզակի թիվ' },
            { id: 'plural', icon: Users, label: 'Հոգնակի թիվ' },
            { id: 'rules', icon: Info, label: 'Կարևոր կանոն' },
            { id: 'formal', icon: ShieldCheck, label: 'Հարգալից ձև' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id as Section)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                activeSection === item.id 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
              }`}
            >
              <item.icon className={`w-6 h-6 shrink-0 ${activeSection === item.id ? 'text-indigo-600' : ''}`} />
              <span className="hidden md:block font-black text-sm uppercase tracking-wider">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto hidden md:block">
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Arthur Edition</p>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Սովորիր իսպաներեն հեշտ և արագ:
            </p>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pl-20 md:pl-72 min-h-screen">
        <div className="max-w-3xl mx-auto py-12 px-6 md:py-20 md:px-12">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile Header (Optional, but good for UX) */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 p-4 z-40 flex items-center justify-between">
        <span className="font-black tracking-tighter uppercase text-sm">Spanish Guide</span>
        <div className="w-8 h-8 bg-indigo-600 rounded-lg" />
      </div>
    </div>
  );
}
